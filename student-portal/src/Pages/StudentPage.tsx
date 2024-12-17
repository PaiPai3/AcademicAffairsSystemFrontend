import { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import CourseSelection from './CourseSelection';

const StudentPage = () => {
    const [selectedPage, setSelectedPage] = useState('course');

    return (
        <div style={{ display: 'flex' }}>
            <Sidebar onPageChange={setSelectedPage} />
            <div style={{ flex: 1, padding: '20px' }}>
                {selectedPage === 'course' ? <CourseSelection /> : <h2>成绩查询暂未实现</h2>}
            </div>
        </div>
    );
};

export default StudentPage;
