import React from "react";

const GiftDescription = (props) => {
    return (   
        <p className="gift-detail-description">
            {props.gift.description}
            <br /><br />
            <a href={props.gift.url} alt="Company's Product Page" target="_blank" rel="noreferrer nofollow">Company Page</a>
        </p>
    );
};

export default GiftDescription;