import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { firestore } from '../firebase/config';

const GiftsListPage = () => {
    const [ gifts, setGifts ] = useState([]);
    

    useEffect( () => {
        const giftsRef = firestore.collection('gifts');
        const unsubscribe = giftsRef.onSnapshot(querySnapshot => {
            const gifts = querySnapshot.docs.map( (gift) => {
                return { id: gift.id, ...gift.data() } ;
            });
            setGifts(gifts);
        });
        return unsubscribe;
    }, []);



    return (
        <div>
            <h2>This page will list all of the gifts in the database.</h2>
            <ul className="gifts-grid">
                {
                    gifts.map(gift => (
                        <li key={gift.id} className="gift-card">
                            <Link to={`/gifts/${gift.id}`} >
                                <img src={gift.img_url} alt={gift.title} className="gift-img" />
                                <p className="gift-title">{gift.title}</p>
                                <p className="gift-brand">by {gift.brand}</p>
                                <p className="gift-price">${gift.price}</p>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default GiftsListPage;