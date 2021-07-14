import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="site-footer">
            <p>
                &copy; {(new Date().getFullYear())} ~ Brett Baisley
            </p>
        </footer>
    )
}
export default Footer;