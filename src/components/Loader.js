import React from 'react';

const Loader = (props) => {
    if (props.value) {
        return (
            <div className="loader-container">
                <div className="loader">Loading...</div>
            </div>   
        )
    } 
    return null;
}

export default Loader;