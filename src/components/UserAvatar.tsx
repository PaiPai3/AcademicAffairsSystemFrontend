import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserAvatar.css';

const UserAvatar: React.FC = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();

    const handleMouseEnter = () => setShowDropdown(true);
    const handleMouseLeave = () => setShowDropdown(false);

    const goToProfile = () => navigate('/profile'); // 跳转个人中心页面
    const logout = () => navigate('/'); // 跳转登录页面

    return (
        <div className="user-avatar" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img
                src="src/assets/avatar.png" // 用户头像占位符
                alt="User Avatar"
                className="avatar-image"
            />
            {showDropdown && (
                <div className="avatar-dropdown">
                    <div onClick={goToProfile} className="dropdown-item">
                        个人信息
                    </div>
                    <div onClick={logout} className="dropdown-item">
                        退出登录
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserAvatar;
