const PostDetail = ({ post, onClose }) => {
    if (!post) return null;

    return (
        <div className="post-detail">
            <h2 style={{ textAlign: "center" }}>{post.title}</h2>
            <p style={{ textAlign: "center" }}><strong>Author:</strong> {post.author}</p>
            <p>{post.content}</p>
            <div className="actions">
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
                <button className="close-btn" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default PostDetail;