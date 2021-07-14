import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="site-header">
            <h1>Gifts</h1>
            <Link to="/login" >Login</Link>
        </header>
    )
}

export default Header