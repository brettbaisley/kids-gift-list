import React from "react";
import Gift from "../components/Gift";
import AdminActions from "../components/AdminActions";

const AdminGiftGallery = props => {
  const giftList = props.data;
  let gifts;
  
  if (giftList.length > 0) {
    gifts = giftList.map(gift => {
      let id = gift.id;
      let title = gift.title;
      let img_url = gift.img_url;
      let brand = gift.brand;
      let price = gift.price;
      let description = gift.description;
      return (
        <>
          <Gift key={id} id={id} img_url={img_url} title={title} brand={brand} price={price} description={description} className="admin-gift-list" adminActions={<AdminActions id={id}/>}/>
        </>
      );
    });
  } 

  return (
    <ul className='admin-gift-container'>
        {gifts}
    </ul>
  );
};

export default AdminGiftGallery;