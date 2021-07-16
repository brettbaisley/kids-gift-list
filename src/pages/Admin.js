import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { firestore } from '../firebase/config';


const AdminPage = () => {
    const [ giftList, setGiftList ] = useState([]);

    const deleteGift = async (id) => {
        const giftRef = firestore.collection('gifts').doc(id);
        await giftRef.delete();
    }

    useEffect( () => {
        const giftsRef = firestore.collection('gifts');
        const unsubscribe = giftsRef.onSnapshot(querySnapshot => {
            const gifts = querySnapshot.docs.map( (gift) => {
                return { id: gift.id, ...gift.data() } ;
            });
            setGiftList(gifts);
        });
        return unsubscribe;
    }, []);

    if (!giftList) {
        return null;
    }


    return (
        <>
            <h2>Admin  Page</h2>
            <Link to="/admin/add" className="btn btn-primary">Add</Link>
            <div className="admin-gift-container">
                    {
                        giftList.map(gift => (
                            <div key={gift.id} className="admin-gift-list">
                                <p>{gift.brand}</p>
                                <p>{gift.title}</p>
                                <p>{gift.description.substring(0,150)}...</p>
                                <p>${gift.price}</p>
                                <div>
                                    <button type="button" onClick={() => deleteGift(gift.id)}>Delete</button>
                                    <Link className="btn btn-primary" to={`/admin/update/${gift.id}`}>Update</Link>
                                </div>
                            </div>
                        ))
                    }
            </div>
        </>
    )
}
export default AdminPage;