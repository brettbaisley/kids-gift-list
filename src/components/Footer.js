import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="site-footer">
            <p>
                &copy; {(new Date().getFullYear())} &#183; Brett Baisley &#183; Made with &#x2661; in New York
            </p>
        </footer>
    )
}
export default Footer;