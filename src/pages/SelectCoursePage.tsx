import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import './SelectCoursePage.css';
import { useNavigate } from 'react-router-dom';

interface Course {
    name: string;
    credit: number;
    teacher: string;
    location: string;
    day: number;
    start: number;
    end: number;
}

const SelectCoursePage: React.FC = () => {
    const navigate = useNavigate();

    // 初始可选课程数据
    const [availableCourses, setAvailableCourses] = useState<Course[]>([
        { name: '职业规划与创新创业（六）', credit: 5, teacher: '孙九洲', location: '菁菁校区 博弈北B411', day: 2, start: 6, end: 7 },
        { name: '大学体育（四）', credit: 0.5, teacher: '徐辉', location: '南排球场-1', day: 2, start: 6, end: 7 },
        { name: '网络工程实验', credit: 2, teacher: '韩莉', location: '实验楼A201', day: 4, start: 6, end: 9 },
        { name: '编译原理', credit: 3, teacher: '姚晟', location: '博弈北C108', day: 2, start: 6, end: 8 },
    ]);

    // 已选课程（模拟共享状态）
    const [selectedCourses, setSelectedCourses] = useState<Course[]>([]);

    // 检查课程是否冲突
    const isConflict = (newCourse: Course) => {
        return selectedCourses.some(
            (course) =>
                course.day === newCourse.day &&
                ((newCourse.start >= course.start && newCourse.start <= course.end) ||
                    (newCourse.end >= course.start && newCourse.end <= course.end))
        );
    };

    // 选课操作
    const handleSelectCourse = (course: Course) => {
        if (isConflict(course)) {
            alert(`课程 "${course.name}" 与已有课程时间冲突！`);
        } else {
            // 添加到已选课程列表
            setSelectedCourses([...selectedCourses, course]);
            // 从可选课程列表中移除
            setAvailableCourses(availableCourses.filter((c) => c !== course));
            alert(`课程 "${course.name}" 选课成功！`);
        }
    };

    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div className="select-course-container">
                <h2>选课界面</h2>
                {/* 滚动容器 */}
                <div className="table-container">
                    <table className="course-table">
                        <thead>
                        <tr>
                            <th>操作</th>
                            <th>选课状态</th>
                            <th>课程信息</th>
                            <th>授课教师</th>
                            <th>时间地点</th>
                        </tr>
                        </thead>
                        <tbody>
                        {availableCourses.map((course, index) => (
                            <tr key={index}>
                                <td>
                                    <button onClick={() => handleSelectCourse(course)}>选课</button>
                                </td>
                                <td>待选课</td>
                                <td>{course.name} ({course.credit}学分)</td>
                                <td>{course.teacher}</td>
                                <td>
                                    周{course.day} 第{course.start}-{course.end}节 <br />
                                    {course.location}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <button className="go-back" onClick={() => navigate('/courses')}>
                    返回课程表
                </button>
            </div>
        </div>
    );
};

export default SelectCoursePage;
