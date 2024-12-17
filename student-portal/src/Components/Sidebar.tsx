import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faTachometerAlt,
    faCogs,
    faList,
    faChartLine,
    faFileAlt,
    faDatabase,
    faCog,
} from '@fortawesome/free-solid-svg-icons';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            {/* Logo */}
            <div className="logo">
                <img src="logo.png" alt="Logo" />
                <h2>ReflexionPro</h2>
            </div>

            {/* 导航菜单 */}
            <ul className="menu">
                <li>
                    <FontAwesomeIcon icon={faHome} />
                    <span>Home</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faTachometerAlt} />
                    <span>Dashboard</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faCogs} />
                    <span>Features</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faList} />
                    <span>Categories</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faChartLine} />
                    <span>Goals</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faFileAlt} />
                    <span>Reports</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faDatabase} />
                    <span>Data & Predictions</span>
                </li>
            </ul>

            {/* 底部设置 */}
            <div className="settings">
                <FontAwesomeIcon icon={faCog} />
                <span>Settings</span>
            </div>
        </div>
    );
};

export default Sidebar;
