import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';
import HowToUse from '../components/HowToUse';

const WelcomePage = () => {
    return (
        <>
            <div className="welcome-page">
                <div className="welcome-img">
                </div>
                <div className="welcome-text">
                    <h2>Mateo and Lucas Gift Ideas</h2>
                    <p>This site was designed to help people with gift ideas. </p>
                    <Link to="/gifts" className='btn btn-primary'>See List</Link>
                </div>       
            </div>            
            <HowToUse />  
        </>
    )
}
export default WelcomePage;