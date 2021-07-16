import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { firestore } from '../firebase/config';


const GiftDetailsPage = () => {
    const params = useParams();
    const [ gift, setGift ] = useState(null);

    useEffect( () => {
        const giftRef = firestore.collection('gifts').doc(params.id);

        giftRef.get()
            .then( (document) => {
                if (document.exists) {
                    setGift(document.data());
                }
            });
    }, [params.id]);

    if (!gift) {
        return null;
    }


    return (
        <>
            <h2>Gift Details Page</h2>
            <Link to="/gifts">&lt;&lt;Back</Link>
            <div className="gift-detail-card">
                <p className="gift-brand gift-detail-brand">{gift.brand}</p>
                <p className="gift-title gift-detail-title">{gift.title}</p>
                <p className="gift-price gift-detail-price">${gift.price}</p>
                <p className="gift-detail-description">{gift.description}</p>
                <img src={gift.img_url} alt={gift.title} className="gift-img gift-detail-img" />
            </div>
        </>
    )
}
export default GiftDetailsPage;