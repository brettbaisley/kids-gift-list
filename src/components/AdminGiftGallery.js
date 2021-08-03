import React, {useContext} from "react";
import { GiftContext } from '../firebase/GiftProvider';
import Gift from "../components/Gift/Gift";
import GiftDescription from "../components/Gift/GiftDescription";
import AdminActions from "../components/AdminActions";

const AdminGiftGallery = () => {
  const giftList = useContext(GiftContext);
  let gifts;
  
  if (giftList.length > 0) {
    gifts = giftList.map(gift => {
      return (
              <li key={gift.id} className="admin-gifts-list"> 
                  <Gift gift={gift} className="gift-card" />
                  <GiftDescription gift={gift} descLength='100' />
                  <AdminActions id={gift.id} />
              </li>
            )
    })
  } 

  return (
    <ul className='admin-gifts-grid'>
        {gifts}
    </ul>
  );
};

export default AdminGiftGallery;