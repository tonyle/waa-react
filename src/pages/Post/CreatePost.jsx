import CreatePost from "../../components/CreatePost.jsx";
import {SelectedIdProvider} from "../../context/SelectedId.jsx";

const CreatePostPage = () => {
    return (
        <SelectedIdProvider>
            <CreatePost />
        </SelectedIdProvider>
    );
}

export default CreatePostPage;