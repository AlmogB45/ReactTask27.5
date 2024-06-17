import React, { useContext, useState } from 'react';
import { UserContext } from '../Context/UserContext';
import { useForm } from 'react-hook-form';
import '../CSS/StudentForm.css';

const StudentForm = () => {
    const { addStudent } = useContext(UserContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const newStudent = {
            name: data.name,
            score: parseInt(data.score),
            id: Date.now(),
        };
        addStudent(newStudent);
    };

    return (
        <div className='StudentPanel'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='StudentName'>
                <h4>Name</h4>
                <input 
                    {...register('name', { 
                        required: 'Name is required', 
                        minLength: { value: 2, message: 'Minimum 2 letters' } 
                    })} 
                />
                {errors.name && <span style={{color: 'red'}}>{errors.name.message}</span>}
            </div>
            <div className='StudentScore'>
                <h4>Score</h4>
                <input 
                    type="number"
                    {...register('score', { 
                        required: 'Score is required', 
                        min: { value: 0, message: 'Minimum score is 0' },
                        max: { value: 100, message: 'Maximum score is 100' }
                    })} 
                />
                {errors.score && <span style={{color: 'red'}}>{errors.score.message}</span>}
            </div>
            <div className='ButtonStudent'>
            <button type="submit">Add Student</button>
            </div>
        </form>
        </div>
    );
};

export default StudentForm;