import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../Context/UserContext';
import '../CSS/UserForm.css';

const UserForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { setUserName } = useContext(UserContext);
    const onSubmit = data => {
        setUserName(data.name);
    };

    const email = watch('email');

    return (
        <div className='formPanel'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='NameForm'>
                <h4>Name</h4>
                <input 
                    {...register('name', {
                        required: 'Name is required',
                        minLength: { value: 2, message: 'Minimum 2 letters' },
                        pattern: { value: /^[a-zA-Z\s]*$/, message: 'Only English is allowed' }
                    })} 
                />
                {errors.name && <span style={{color: 'red'}}>{errors.name.message}</span>}
            </div>
            <div className='EmailForm'>
                <h4>Email</h4>
                <input 
                    {...register('email', {
                        required: 'Email is required',
                        pattern: { 
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
                            message: 'Invalid email address'
                        }
                    })} 
                />
                {errors.email && <span style={{color: 'red'}}>{errors.email.message}</span>}
            </div>
            <div className='EmailForm'>
                <h4>Confirm Email</h4>
                <input 
                    {...register('confirmEmail', {
                        required: 'Confirm Email is required',
                        validate: value => value === email || 'Emails do not match'
                    })} 
                />
                {errors.confirmEmail && <span style={{color: 'red'}}>{errors.confirmEmail.message}</span>}
            </div>
            <div className='PassForm'>
                <h4>Password</h4>
                <input 
                    type="password"
                    {...register('password', {
                        required: 'Password is required',
                        minLength: { value: 6, message: 'Minimum 6 letters' }
                    })} 
                />
                {errors.password && <span style={{color: 'red'}}>{errors.password.message}</span>}
            </div>

            <div className='buttonForm'>
            <button type="submit">Submit</button>
            </div>
            <div className='seperatorLine'></div>
        </form>
        </div>
    );
};

export default UserForm;