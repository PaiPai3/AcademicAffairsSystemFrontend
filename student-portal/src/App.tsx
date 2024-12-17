import { Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import StudentPage from './Pages/StudentPage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/student" element={<StudentPage />} />
        </Routes>
    );
}

export default App;
