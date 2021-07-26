import React from "react";
import { Link } from 'react-router-dom';

const Gift = ({ id, img_url, title, brand, price, description, className, adminActions }) => {
    if (adminActions) {
        return (
            <li key={id} className={className}>
                <img src={img_url} alt={title} className="gift-img" />
                <p className="gift-title">{title}</p>
                <p className="gift-brand">by {brand}</p>
                <p className="gift-price">${price}</p>
                <p className="gift-description">{description.substring(0,150)}...</p>
                {adminActions}
            </li>
        );
    } else {
        return (   
            <li key={id} className={className}>
                <Link to={`/gifts/${id}`} >
                    <img src={img_url} alt={title} className="gift-img" />
                    <p className="gift-title">{title}</p>
                    <p className="gift-brand">by {brand}</p>
                    <p className="gift-price">${price}</p>
                </Link>
            </li>
    );
    }
};

export default Gift;