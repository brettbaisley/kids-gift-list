import React from "react";

const GiftDescription = (props) => {
    const descLength = props.descLength ? props.descLength : props.gift.description.length ;

    let description = props.gift.description.substring(0, descLength);
    if (props.descLength) {
        description = description + "...";
    }

    return (   
        <p className="gift-detail-description">
            {description}
            <br /><br />
            <a href={props.gift.url} alt="Company's Product Page" target="_blank" rel="noreferrer nofollow">Company Page</a>
        </p>
    );
};

export default GiftDescription;