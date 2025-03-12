import {useEffect, useState} from "react";
import {fetchService} from "../service/fetchService.jsx";

const PostDetail = ({ post, onClose, deletePost }) => {

    const [postData, setPostData] = useState({});
    useEffect(() => {
        fetchService.get('posts/'+ post.id)
            .then(response => {
                setPostData(response);
            })
            .catch(error => {
                console.log(error.message)
            })
    }, [post.id]);
    if (!post) return null;
    return (
        <>
        <div className="post-detail">
            <h2 style={{ textAlign: "center" }}>{postData.title}</h2>
            <p style={{ textAlign: "center" }}><strong>Author:</strong> {postData.author}</p>
            <p>{postData.content}</p>
            <div className="actions">
                <button className="delete-btn" onClick={deletePost}>Delete</button>
                <button className="close-btn" onClick={onClose}>Close</button>
            </div>
            <div className="comments">
                <h3>Comments</h3>
                {postData.comments?.length > 0 ? (
                    postData.comments.map((comment) => (
                        <div key={comment.id}>{comment.name}</div>
                    ))
                ) : (
                    <p>No comments yet.</p>
                )}
            </div>
        </div>
        </>
    );
};

export default PostDetail;