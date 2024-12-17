import React from 'react';
import Sidebar from '../components/Sidebar';

const SettingsPage: React.FC = () => {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ flex: 1, padding: '20px' }}>
                <h2>设置</h2>
                <p>暂未开发...</p>
            </div>
        </div>
    );
};

export default SettingsPage;
