import React from "react";
import Gift from "../components/Gift/Gift";
import { Link } from 'react-router-dom';

const GiftGallery = (giftList) => {
  let gifts;

  if (giftList.data.length > 0) {
    gifts = giftList.data.map(gift => {
      return (
              <li key={gift.id} className="gift-card"> 
                <Link to={`/gifts/${gift.id}`} >
                  <Gift gift={gift} className="gift-card" />
                </Link>
              </li>
            )
    })
  } 


  return (
    <>
      <ul className='gifts-grid'>
          {gifts}
      </ul>
    </>
  );
};

export default GiftGallery;