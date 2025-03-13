import { useContext, useEffect, useState, useRef } from "react";
import { fetchService } from "../service/fetchService.jsx";
import { SelectedIdContext } from "../context/SelectedId.jsx";

const PostDetail = ({ onClose, deletePost }) => {
    const { selectedId } = useContext(SelectedIdContext);
    const [postData, setPostData] = useState({});
    const fetched = useRef(false);

    useEffect(() => {
        if (!selectedId || fetched.current) return;

        fetched.current = true;

        const fetchData = async () => {
            try {
                console.log(selectedId);
                const response = await fetchService.get(`posts/${selectedId}`);
                setPostData(response);
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchData();

        return () => {
            fetched.current = false;
        };
    }, [selectedId]);

    if (!selectedId) return null;

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
