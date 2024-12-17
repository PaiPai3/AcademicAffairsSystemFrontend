import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState<'学生' | '教师'>('学生'); // 默认角色为学生
    const navigate = useNavigate();

    const handleLogin = () => {
        if (!username || !password) {
            alert('请输入账号和密码！');
            return;
        }

        if (role === '学生') {
            if (username.startsWith('S') && password === 'student123') {
                // alert('学生账号登录成功');
                navigate('/courses'); // 导航到选课界面
            } else {
                alert('学生账号或密码错误！');
            }
        } else if (role === '教师') {
            if (username.startsWith('T') && password === 'teacher123') {
                // alert('教师账号登录成功');
                navigate('/grades'); // 导航到成绩查询界面
            } else {
                alert('教师账号或密码错误！');
            }
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2 className="system-title">教务管理系统</h2>
                <input
                    type="text"
                    placeholder="请输入账号"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="input-field"
                />
                <input
                    type="password"
                    placeholder="请输入密码"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-field"
                />
                <div className="role-select">
                    <label>
                        <input
                            type="radio"
                            value="学生"
                            checked={role === '学生'}
                            onChange={() => setRole('学生')}
                        />
                        学生
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="教师"
                            checked={role === '教师'}
                            onChange={() => setRole('教师')}
                        />
                        教师
                    </label>
                </div>
                <button onClick={handleLogin} className="login-button">
                    登录
                </button>
                <a href="#" className="forgot-password">
                    忘记密码？
                </a>
            </div>
        </div>
    );
};

export default LoginPage;
