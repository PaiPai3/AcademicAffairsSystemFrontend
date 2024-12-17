import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import './GradePage.css';
import UserAvatar from "../components/UserAvatar";

// 模拟成绩数据
const mockData = {
    '2023': [
        { course: '高等数学', credit: 3, grade: 90 },
        { course: '大学英语', credit: 2, grade: 85 },
        { course: '数据结构', credit: 4, grade: null },
        { course: '计算机网络', credit: 3, grade: 78 },
        { course: '计算机基础', credit: 3, grade: 78 },
        { course: '计算机进阶', credit: 3, grade: 78 },
    ],
    '2024': [
        { course: '操作系统', credit: 3, grade: 88 },
        { course: '数据库原理', credit: 3, grade: null },
        { course: '编译原理', credit: 3, grade: 92 },
        { course: '软件工程', credit: 2, grade: 80 },
    ],
};

const GradePage: React.FC = () => {
    const [year, setYear] = useState('2023'); // 默认年份
    const grades = mockData[year];

    // 计算平均学分绩点
    const calculateGPA = () => {
        // 过滤出有效的分数
        const validGrades = grades.filter((g) => g.grade !== null);
        const totalPoints = validGrades.reduce((acc, g) => acc + g.credit * (g.grade / 10 - 5), 0);
        const totalCredits = validGrades.reduce((acc, g) => acc + g.credit, 0);
        return totalCredits ? (totalPoints / totalCredits).toFixed(2) : '暂无数据';
    };


    return (
        <div style={{ display: 'flex' }}>
            {/* 侧边栏 */}
            <Sidebar />
            {/* 内容区域 */}
            <div className="grade-container">
                <div className="header">
                    <h2>成绩查询</h2>
                    <UserAvatar/>
                </div>
                {/* 下拉框选择年份 */}
                <div className="year-select">
                    <label>选择年份：</label>
                    <select value={year} onChange={(e) => setYear(e.target.value)}>
                        <option value="所有年份">2023</option>
                        <option value="2022">2023</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                    </select>
                </div>

                {/* 滚动面板展示课程成绩 */}
                <div className="grade-table">
                    <table>
                        <thead>
                        <tr>
                            <th>课程名称</th>
                            <th>学分</th>
                            <th>成绩</th>
                        </tr>
                        </thead>
                        <tbody>
                        {grades.map((g, index) => (
                            <tr key={index}>
                                <td>{g.course}</td>
                                <td>{g.credit}</td>
                                <td>{g.grade !== null ? g.grade : '暂无'}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                {/* 平均学分绩点 */}
                <div className="gpa">
                    <strong>平均学分绩点：</strong> {calculateGPA()}
                </div>
            </div>
        </div>
    );
};

export default GradePage;
