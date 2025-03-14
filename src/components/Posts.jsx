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
            {selectedId && (
                <PostDetail deletePost={() => deletePost(selectedId)} onClose={() => setSelectedId(null)} />
            )}
        </div>
    );
}
export default Posts;