import { useRef } from "react";
import { useNavigate } from "react-router";
import {fetchService} from "../service/fetchService.jsx";

const CreatePost = () => {
    const newPostForm = useRef();

    const navigate = useNavigate();
    const PostHandler = (e) => {
        e.preventDefault();
        const form = newPostForm.current;
        const data = {
            name: form['title'].value,
            author: form['author'].value,
            content: form['content'].value,
            userId: 1
        };
        console.log(data);
        fetchService.post('posts', data)
            .then(response => {
                navigate('/');
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className="NewPost">
            <form ref={newPostForm} onSubmit={PostHandler}>
                <h1>Add a Post</h1>

                <label>Title</label>
                <input type="text"
                       label={'title'}
                       name={'title'}
                />

                <label>Author</label>
                <input type="text"
                       label={'author'}
                       name={'author'}
                />
                <label>Content</label>
                <input type="text"
                       label={'content'}
                       name={'content'}
                />
                <button>Add Post</button>
            </form>

        </div>
    );

}
export default CreatePost;
