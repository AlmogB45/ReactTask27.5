import React, { useContext } from 'react';
import { UserContext } from '../Context/UserContext';
import '../CSS/StudentList.css';

const StudentList = () => {
    const { students, removeStudent } = useContext(UserContext);

    const handleRemove = (student) => {
        if (window.confirm(`Are you sure you want to remove ${student.name}?`)) {
            removeStudent(student.id);
        }
    };

    return (
        <div>
            <h2>Student List</h2>
            <ul>
                {students.map(student => (
                    <li key={student.id}>
                        {student.name} - {student.score} 
                        <button id = 'RemoveButton'onClick={() => handleRemove(student)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;