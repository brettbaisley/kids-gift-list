import React from "react";
import { Link } from 'react-router-dom';
import PurchaseButton from '../components/PurchaseButton';
import Gift from './Gift/Gift';
import GiftDescription from './Gift/GiftDescription';


const GiftProfile = ( {gift} ) => {
    gift = gift[0];
  



  return (
    <div className="gift-detail-card">
      <Gift gift={gift} />
      <GiftDescription gift={gift} />
        <div className="gift-detail-actions">
            <Link to="/gifts" className="btn btn-primary">&lt; Back</Link>     
            <PurchaseButton isPurchased={gift.purchased} purchasedBy={gift.purchasedBy} id={gift.id} />
        </div>
    </div>
  );
};

export default GiftProfile;