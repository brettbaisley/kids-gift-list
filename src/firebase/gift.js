import { firestore } from './config';

export const addGiftDocument = async (gift) => {
    // Create the gift object
    const giftDetails = {
        brand: gift.brand,
        createDate: "",
        description: gift.description,
        img_url: gift.img_url,
        price: gift.price,
        purchased: false,
        title: gift.title,
        updateData: "",
        url: gift.url
    };

    // Write the gift data to Cloud Firestore
    const res = firestore.collection('gifts').add(giftDetails)
    console.log('Added document with ID: ', res.id);
    return res;
}


export const updateGiftDocument = async (gift) => {
    console.log("Update document with ID: ", gift.uid)
    const docRef = firestore.doc(`/gifts/${gift.uid}`);
    return docRef.set(gift, {merge: true});
}


export const deleteGiftDocument = async (gift) => {
    console.log("Update document with ID: ", gift.uid)
    return firestore.doc(`/gifts/${gift.uid}`).delete();
}

export const getGifts = async () => {
    // Return all gifts
    console.log("Get ALL gifts")
    const giftsRef = firebase.collection('gifts')
    const observer = giftsRef.onSnapshot(querySnapshot => {
        
    })
}

export const getGift = async () => {
    // Return give for passed UID
    console.log("Get gift by ID")
}