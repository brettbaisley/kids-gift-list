import React from "react";

const GiftWhichKid = (props) => {    

    const kidClass = (kid) => {
        let kidClass = 'gift-whichkid-initial';

        if (kid === 'mateo') return `${kidClass} mateo`;
        if (kid === 'lucas') return `${kidClass} lucas`;
        return kidClass;
    }

    if (props.kids) {
        const kids = props.kids.map( (kid) => <span key={kid} className={kidClass(kid)}>{kid.substring(0,1).toUpperCase()}</span>);
        return (   
            <div className="gift-whichkid">{kids}</div>
        );
    }
    return null;
};

export default GiftWhichKid;