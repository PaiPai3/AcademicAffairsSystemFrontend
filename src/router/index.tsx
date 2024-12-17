import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import CoursePage from '../pages/CoursePage';
import GradePage from '../pages/GradePage';
import SettingsPage from '../pages/SettingsPage';

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/courses" element={<CoursePage />} />
                <Route path="/grades" element={<GradePage />} />
                <Route path="/settings" element={<SettingsPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
