import React from 'react';
import { UserProvider } from './Context/UserContext';
import UserForm from './Component/UserForm';
import Header from './Component/Header';
import StudentForm from './Component/StudentForm';
import StudentList from './Component/StudentList';

const App = () => {
    return (
        <UserProvider>
            <Header />
            <UserForm />
            <StudentForm />
            <StudentList />
        </UserProvider>
    );
};

export default App;