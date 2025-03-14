import { Routes, Route } from "react-router";
import React from 'react';
import Dashboard from "../pages/Dashboard/Dashboard.jsx";
import CreatePostPage from "../pages/Post/CreatePost.jsx";

export default function PageRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/create' element={<CreatePostPage />} />
        </Routes>
    )
}