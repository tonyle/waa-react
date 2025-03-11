import { useState } from "react";
import Post from "./Post.jsx";
import PostDetail from "./PostDetail.jsx";

const Posts = () => {
    const [newTitle, setNewTitle] = useState("");
    const [selectedPost, setSelectedPost] = useState(null);
    const [posts, setPosts] = useState([
        {
            id: 111,
            title: "Happiness",
            author: "John",
            content: "This is the content in the post Happiness",
        },
        {
            id: 112,
            title: "MIU",
            author: "Dean",
            content: "This is the content in the post MIU",
        },
        {
            id: 113,
            title: "Enjoy Life",
            author: "Jasmine",
            content: "This is the content in the post Enjoy Life",
        }
    ]);
    const handleChangeTitle = () => {
        if (!newTitle.trim()) return;
        setPosts(posts.map(post =>
            post.id === 111 ? { ...post, title: newTitle } : post
        ));
        setNewTitle("");
    };
    return (
        <div className="post-container">
            {posts.map((post) => (
                <Post key={post.id} post={post} onClick={() => setSelectedPost(post)} />
            ))}
            <div className="changetitle">
                <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="Enter new title"
                />
                <button className="submit" onClick={handleChangeTitle}>
                    Change Name
                </button>
            </div>
            {selectedPost && (
                <PostDetail post={selectedPost} onClose={() => setSelectedPost(null)} />
            )}
        </div>
    );
}
export default Posts;