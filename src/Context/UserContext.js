import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userName, setUserName] = useState('');
    const [students, setStudents] = useState(() => {
        const savedStudents = localStorage.getItem('students');
        return savedStudents ? JSON.parse(savedStudents) : [];
    });

    useEffect(() => {
        localStorage.setItem('students', JSON.stringify(students));
    }, [students]);

    const addStudent = (student) => {
        setStudents((prevStudents) => [...prevStudents, student]);
    };

    const removeStudent = (id) => {
        setStudents((prevStudents) => prevStudents.filter(student => student.id !== id));
    };

    return (
        <UserContext.Provider value={{ userName, setUserName, students, addStudent, removeStudent }}>
            {children}
        </UserContext.Provider>
    );
};
