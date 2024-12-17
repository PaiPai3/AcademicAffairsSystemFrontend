import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username === 'student' && password === '123456') {
            navigate('/student');
        } else {
            alert('账号或密码错误！');
        }
    };

    return (
        <div className="login-wrapper">
            <div className="login-container">
                {/* 左侧登录部分 */}
                <div className="login-section">
                    <h2>Sign In</h2>
                    <input
                        type="text"
                        placeholder="Email Address"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleLogin}>SIGN IN</button>
                    <a href="#">Forgot Password?</a>
                </div>

                {/* 右侧注册部分 */}
                <div className="register-section">
                    <h2>Register Now</h2>
                    <p>
                        Register with your personal details to access all of Redback
                        Operation's features.
                    </p>
                    <button>SIGN UP</button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
