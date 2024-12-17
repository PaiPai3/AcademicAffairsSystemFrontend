import React from 'react';
import { Link } from 'react-router-dom';
import { FaChalkboardTeacher, FaChartBar, FaCog } from 'react-icons/fa'; // 引入图标
import './Sidebar.css';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <div className="logo">
                <img src="src/assets/logo.png" alt="Logo" className="logo-img" />
                <h2>教务系统</h2>
            </div>
            <ul className="menu">
                <li>
                    <Link to="/courses">
                        <FaChalkboardTeacher className="icon" />
                        <span>课表界面</span>
                    </Link>
                </li>
                <li>
                    <Link to="/select-courses">
                        <FaChalkboardTeacher className="icon" />
                        <span>选课界面</span>
                    </Link>
                </li>
                <li>
                    <Link to="/grades">
                        <FaChartBar className="icon" />
                        <span>成绩查询</span>
                    </Link>
                </li>
                <li>
                    <Link to="/settings">
                        <FaCog className="icon" />
                        <span>设置</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
