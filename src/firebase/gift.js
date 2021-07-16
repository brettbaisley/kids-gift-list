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
    return res;
}


export const updateGiftDocument = async (gift) => {
    const docRef = firestore.doc(`/gifts/${gift.id}`);
    return docRef.set(gift, {merge: true});
}


export const deleteGiftDocument = async (gift) => {
    console.log("Update document with ID: ", gift.uid)
    return firestore.doc(`/gifts/${gift.uid}`).delete();
}

export const getGifts = async () => {
    // Return all gifts
    console.log("Get ALL gifts")
}

export const getGift = async () => {
    // Return give for passed UID
    console.log("Get gift by ID")
}