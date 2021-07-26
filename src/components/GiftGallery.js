import React from "react";
import Gift from "../components/Gift";

const GiftGallery = props => {
  const giftList = props.data;
  let gifts;
  
  // map variables to each item in fetched image array and return image component
  if (giftList.length > 0) {
    gifts = giftList.map(gift => {
      let id = gift.id;
      let title = gift.title;
      let img_url = gift.img_url;
      let brand = gift.brand;
      let price = gift.price;
      let description = gift.description;
      return <Gift key={id} id={id} img_url={img_url} title={title} brand={brand} price={price} description={description} className="gift-card" />;
    });
  } else {
    // return 'not found' component if no images fetched
    // noImages = <NoImages />; 
  }
  return (
    <ul className='gifts-grid'>
        {gifts}
    </ul>
  );
};

export default GiftGallery;