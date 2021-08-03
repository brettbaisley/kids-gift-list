import React, {useContext} from "react";
import Gift from "../components/Gift/Gift";
import { Link } from 'react-router-dom';
import { GiftContext } from '../firebase/GiftProvider';


const GiftGallery = () => {
  const giftList = useContext(GiftContext);
  let gifts;

  if (giftList.length > 0) {
    gifts = giftList.map(gift => {
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
    <ul className='gifts-grid'>
        {gifts}
    </ul>
  );
};

export default GiftGallery;