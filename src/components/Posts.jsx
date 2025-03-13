import {useContext, useEffect, useState} from "react";
import Post from "./Post.jsx";
import PostDetail from "./PostDetail.jsx";
import { fetchService } from "../service/fetchService.jsx";
import {SelectedIdContext} from "../context/SelectedId.jsx";

const Posts = () => {
    const [selectedPost, setSelectedPost] = useState([]);
    const [posts, setPosts] = useState([]);
    const { selectedId, setSelectedId } = useContext(SelectedIdContext);
    const fetchPosts = () => {
        fetchService.get('posts')
            .then(response => {
                setPosts(response);
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    useEffect(() => {
        fetchPosts()
    }, [])
    const submitPost = () => {
        if (selectedPost && selectedPost.title.trim() === '') return;
        if (selectedPost.id) {
            fetchService.put('posts/'+selectedPost.id, {
                id: selectedPost.id,
                title: selectedPost.title,
                author: selectedPost.author,
                content: selectedPost.content,
                userId: 1
            })
                .then(response => {
                    fetchPosts()
                })
                .catch(error => {
                    console.log(error.message)
                })
        } else {
            fetchService.post('posts', {
                title: selectedPost.title,
                author: selectedPost.author,
                content: selectedPost.content,
                userId: 1
            })
                .then(response => {
                    fetchPosts()
                })
                .catch(error => {
                    console.log(error.message)
                })
        }
        setSelectedPost([])
    };
    const deletePost = (postId) => {
        fetchService.deleteAPI('posts/'+postId)
            .then(response => {
                fetchPosts()
                setSelectedId(null)
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className="post-container">
            {posts && posts.map((post) => (
                <Post key={post.id} post={post} onClick={() => {setSelectedId(post.id)}} />
            ))}
            <div className="changetitle">
                <input
                    type="text"
                    className="input"
                    value={selectedPost.title ?? ''}
                    onChange={(e) => setSelectedPost({ ...selectedPost, title: e.target.value })}
                    placeholder="Enter title"
                />
                <input
                    type="text"
                    className="input"
                    value={selectedPost.author ?? ''}
                    onChange={(e) => setSelectedPost({ ...selectedPost, author: e.target.value })}
                    placeholder="Enter author"
                />
                <input
                    type="text"
                    className="input input-content"
                    value={selectedPost.content ?? ''}
                    onChange={(e) => setSelectedPost({ ...selectedPost, content: e.target.value })}
                    placeholder="Enter Content"
                />
                <button className="edit-btn" onClick={submitPost}>
                    {selectedPost && selectedPost.id ? 'Update' : 'Create'} Post
                </button>
            </div>
            {selectedId && (
                <PostDetail deletePost={() => deletePost(selectedId)} onClose={() => setSelectedId(null)} />
            )}
        </div>
    );
}
export default Posts;