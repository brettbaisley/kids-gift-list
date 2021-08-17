import React from 'react';

const HowToUse = () => {
    return (
        <div className="howtouse">
            <h2>How to Use</h2>
            <p>Everyone can browse the gift list, but the magic happens when you have an account. Once 
                signed in, you'll be able to anonymously mark gifts as purchased, ensuring no one else will 
                buy your gift.
            </p>
            <ol>
                <li>Click the <span className="btn btn-primary">Login</span>button on the top-right.</li>
                <li>Sign in to your account, or click "Sign Up" to create a new account.</li>
                <li>Once logged in, go to the Gift List.</li>
                <li>Click the gift you purchased to see the details page.</li>
                <li>Click the <span className="btn btn-primary">Mark Purchased</span>button to mark gift as purchased.</li>
            </ol>
        </div>   
    )
}

export default HowToUse;