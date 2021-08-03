import React from "react";

const GiftDescription = (props) => {
    const descLength = props.descLength ? props.descLength : props.gift.description.length ;

    return (   
        <p className="gift-detail-description">
            {props.gift.description.substring(0, descLength)}
            <br /><br />
            <a href={props.gift.url} alt="Company's Product Page" target="_blank" rel="noreferrer nofollow">Company Page</a>
        </p>
    );
};

export default GiftDescription;