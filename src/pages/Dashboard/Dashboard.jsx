import Posts from "../../components/Posts.jsx";
import {SelectedIdProvider} from "../../context/SelectedId.jsx";

const Dashboard = () => {
    return (
        <SelectedIdProvider>
            <Posts />
        </SelectedIdProvider>
    );
}

export default Dashboard;