// Displays a single gift view

// Receives: props.gift (object)

// Sends: nothing

// Template output:
// <figure>
//     <img></img>
// </figure>



import React from "react";
import GiftTitle from './GiftTitle';
import GiftPrice from './GiftPrice';
import GiftBrand from './GiftBrand';
import GiftWhichKid from './GiftWhichKid';


const Gift = (props) => {
    return (   
        <>
            <figure>
                <img src={props.gift.img_url} alt={props.gift.title} className="gift-img" />
            </figure>
            <GiftTitle title={props.gift.title} />
            <GiftBrand brand={props.gift.brand} />
            <GiftPrice price={props.gift.price} />
            <GiftWhichKid kids={props.gift.whichKid} />
    </>
    );
};

export default Gift;