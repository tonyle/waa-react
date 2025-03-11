import { Routes, Route } from "react-router";
import React from 'react';
import Dashboard from "../pages/Dashboard/Dashboard.jsx";

export default function PageRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Dashboard />} />
        </Routes>
    )
}