import {useEffect, useState} from "react";
import Post from "./Post.jsx";
import PostDetail from "./PostDetail.jsx";
import { fetchService } from "../service/fetchService.jsx";

const Posts = () => {
    const [selectedPost, setSelectedPost] = useState([]);
    const [posts, setPosts] = useState([]);
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
    const deletePost = (post) => {
        fetchService.deleteAPI('posts/'+post.id)
            .then(response => {
                fetchPosts()
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className="post-container">
            {posts && posts.map((post) => (
                <Post key={post.id} post={post} onClick={() => setSelectedPost(post)} />
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
            {selectedPost && selectedPost.id && (
                <PostDetail post={selectedPost}  deletePost={() => deletePost(selectedPost)} onClose={() => setSelectedPost([])} />
            )}
        </div>
    );
}
export default Posts;