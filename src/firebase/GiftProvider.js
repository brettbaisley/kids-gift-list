import React, {useEffect, createContext, useState } from 'react';
import { firestore } from '../firebase/config';

export const GiftContext = createContext();

export const GiftContextProvider = (props) => {
    const [ giftList, setGiftList ] = useState({});
    // const [ isLoading, setLoading ] = useState(false);


    useEffect( () => {
        // setLoading(true);
        const giftsRef = firestore.collection('gifts');
        const unsubscribe = giftsRef.onSnapshot(querySnapshot => {
            const gifts = querySnapshot.docs.map( (gift) => {
                return { id: gift.id, ...gift.data() } ;
            });
            setGiftList(gifts);
            // setLoading(false);
        });
        return unsubscribe;
    }, []);

    return (
        <GiftContext.Provider value={giftList}>
            {/* {!giftList.loading && props.children} */}
            {props.children}
        </GiftContext.Provider>
    )

}