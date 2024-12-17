import React from 'react';
import Sidebar from '../components/Sidebar';
import './CoursePage.css';
import UserAvatar from "../components/UserAvatar";

const CoursePage: React.FC = () => {
    // 定义课程数据，包含星期、起始时间、结束时间、课程标题、地点和详情
    const schedule = [
        { day: 1, start: 1, end: 2, title: '数字图像处理（双语）', location: '菁菁校区 博弈北A205', details: '22级计算机科学与技术3班' },
        { day: 2, start: 3, end: 4, title: '操作系统', location: '菁菁校区 博弈北C20', details: '22级信息技术类大类' },
        { day: 3, start: 3, end: 4, title: '软件工程概论', location: '菁菁校区 博弈北B507', details: '22级信息技术类大类' },
        { day: 4, start: 6, end: 7, title: '操作系统实验', location: '菁菁校区 实验楼A202', details: '22级计算机类' },
        { day: 1, start: 8, end: 9, title: '计算机接口技术', location: '菁菁校区 博弈北B11', details: '22级信息技术类大类' },
        { day: 5, start: 6, end: 7, title: '数字图像处理实验', location: '菁菁校区 实验楼A102', details: '22级计算机类' },
    ];



    // 判断课程是否在单元格中
    const renderSchedule = (day: number, time: number) => {
        const course = schedule.find((c) => c.day === day && c.start === time);
        if (course) {
            return (
                <td rowSpan={course.end - course.start + 1} className="course-item">
                    <strong>{course.title}</strong>
                    <div>{course.location}</div>
                    <div>{course.details}</div>
                </td>
            );
        }

        // 如果当前单元格在课程的跨度内，则返回 null
        if (schedule.some((c) => c.day === day && time > c.start && time <= c.end)) {
            return null;
        }

        return <td></td>;
    };

    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div className="course-container">
                {/* 上部区域 */}
                <div className="header">
                    <h2>选课界面</h2>
                    <UserAvatar/>
                </div>

                {/* 下部区域：课程表 */}
                <div className="timetable">
                    <table>
                        <thead>
                        <tr>
                            <th></th>
                            <th>星期一</th>
                            <th>星期二</th>
                            <th>星期三</th>
                            <th>星期四</th>
                            <th>星期五</th>
                            <th>星期六</th>
                            <th>星期日</th>
                        </tr>
                        </thead>
                        <tbody>
                        {Array.from({ length: 13 }, (_, time) => (
                            <tr key={time}>
                                <td className="time-slot">{time + 1}</td>
                                {Array.from({ length: 7 }, (_, day) => renderSchedule(day + 1, time + 1))}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default CoursePage;
