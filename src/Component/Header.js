import React, { useContext } from 'react';
import { UserContext } from '../Context/UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../CSS/Header.css'

const Header = () => {
    const { userName } = useContext(UserContext);

    return (
        <header>
            <FontAwesomeIcon icon={faUser} size="2x" color="green" />
            <h1>{userName ? `Welcome, ${userName}` : 'Welcome'}</h1>
        </header>
    );
};

export default Header;