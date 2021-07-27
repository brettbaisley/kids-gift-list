import React from "react";
import { Link } from 'react-router-dom';
import PurchaseButton from '../components/PurchaseButton';

const GiftProfile = ( {gift} ) => {
    gift = gift[0];
  



  return (
    <div className="gift-detail-card">
        <p className="gift-brand gift-detail-brand">{gift.brand}</p>
        <p className="gift-title gift-detail-title">{gift.title}</p>
        <p className="gift-price gift-detail-price">${gift.price}</p>
        <p className="gift-detail-description">
            {gift.description}
            <br /><br />
            <a href={gift.url} alt="Company's Product Page" target="_blank" rel="noreferrer nofollow">Company Page</a>
        </p>
        <img src={gift.img_url} alt={gift.title} className="gift-img gift-detail-img" />
        <div>
            <Link to="/gifts" className="btn btn-primary">&lt; Back</Link>     
            <PurchaseButton isPurchased={gift.purchased} purchasedBy={gift.purchasedBy} id={gift.id} />
        </div>
    </div>
  );
};

export default GiftProfile;