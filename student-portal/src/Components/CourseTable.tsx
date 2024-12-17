import React from 'react';
import './CourseTable.css';

interface Course {
    day: number; // 星期几（1-7）
    timeSlot: number; // 起始节次（1-13）
    duration: number; // 持续节数
    name: string; // 课程名称
    location: string; // 上课地点
    teacher: string; // 授课老师
}

const courses: Course[] = [
    { day: 1, timeSlot: 9, duration: 2, name: '数字图像处理（双语）', location: '教学北楼A205', teacher: '罗琳' },
    { day: 2, timeSlot: 4, duration: 2, name: '计算机图形学', location: '博学楼B314', teacher: '付振宇' },
    { day: 3, timeSlot: 6, duration: 2, name: '操作系统实验', location: '实验楼A201', teacher: '实验室' },
    { day: 3, timeSlot: 7, duration: 2, name: '机器学习实验', location: '教学北楼B312', teacher: '王鹏' },
    { day: 7, timeSlot: 13, duration: 2, name: '形势与政策（五）', location: '教学北楼A304', teacher: '李国栋' },
];

const CourseTable: React.FC = () => {
    const renderGrid = () => {
        const grid = [];
        for (let timeSlot = 1; timeSlot <= 13; timeSlot++) {
            for (let day = 1; day <= 7; day++) {
                const course = courses.find((c) => c.day === day && c.timeSlot === timeSlot);
                if (course) {
                    grid.push(
                        <div
                            key={`${day}-${timeSlot}`}
                            className="course-card"
                            style={{
                                gridColumn: day + 1, // 星期几列（从第2列开始）
                                gridRow: `${timeSlot} / span ${course.duration}`, // 起始节次和持续节数
                            }}
                        >
                            <div className="course-name">{course.name}</div>
                            <div className="course-location">{course.location}</div>
                            <div className="course-teacher">{course.teacher}</div>
                        </div>
                    );
                }
            }
        }
        return grid;
    };

    return (
        <div className="course-table">
            {/* 顶部星期标题 */}
            <div className="grid-header">
                <div>时间</div>
                <div>周一</div>
                <div>周二</div>
                <div>周三</div>
                <div>周四</div>
                <div>周五</div>
                <div>周六</div>
                <div>周日</div>
            </div>

            {/* 网格容器：左侧时间列和课程格 */}
            <div className="grid-container">
                {/* 左侧时间节次 */}
                {Array.from({ length: 13 }, (_, i) => (
                    <div key={`time-${i}`} className="time-slot">
                        第 {i + 1} 节
                    </div>
                ))}

                {/* 渲染课程 */}
                {renderGrid()}
            </div>
        </div>
    );
};

export default CourseTable;
