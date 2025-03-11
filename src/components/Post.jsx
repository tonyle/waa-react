const Post = ({ post, onClick }) => {
    return (
        <div className="post-item" onClick={onClick} style={{ cursor: "pointer" }}>
            <div>ID: {post.id}</div>
            <div>Title: {post.title}</div>
            <div>Author: {post.author}</div>
        </div>
    );
}
export default Post;
