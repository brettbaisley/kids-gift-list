import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';

const WelcomePage = () => {
    return (
        <section className="welcome-page">
            <div className="welcome-img">
            </div>
            <div className="welcome-text">
                <h2>Mateo and Lucas Gift Ideas</h2>
                <p>This site was designed to help people with gift ideas. </p>
                <Link to="/gifts-list">Click to See List</Link>
            </div>
        </section>            
    )
}
export default WelcomePage;