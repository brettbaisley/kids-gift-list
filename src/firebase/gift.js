import firebase from 'firebase/app';
import { firestore } from './config';

export const addGiftDocument = async (gift) => {
    // Create the gift object
    const giftDetails = {
        brand: gift.brand,
        createDate: firebase.firestore.FieldValue.serverTimestamp(),
        description: gift.description,
        img_url: gift.img_url,
        price: gift.price,
        purchased: false,
        purchasedBy: '',
        title: gift.title,
        updateDate: firebase.firestore.FieldValue.serverTimestamp(),
        url: gift.url,
        whichKid: []
    };

    // Write the gift data to Cloud Firestore
    const res = firestore.collection('gifts').add(giftDetails);
    return res;
}


export const updateGiftDocument = async (gift) => {
    const docRef = firestore.doc(`/gifts/${gift.id}`);
    return docRef.set( {...gift, updateDate: firebase.firestore.FieldValue.serverTimestamp() }, {merge: true});
}


export const deleteGiftDocument = async (giftId) => {
    console.log("Deleted document with ID: ", giftId)
    return firestore.doc(`/gifts/${giftId}`).delete();
}

export const getGifts = async () => {
    // Return all gifts
    console.log("Get ALL gifts")
}

export const getGift = async () => {
    // Return give for passed UID
    console.log("Get gift by ID")
}

export const markPurchased = async ({id, purchasedBy}) => {
    console.log(`Marking gift id ${id} as purchased by ${purchasedBy}`);
    const docRef = firestore.doc(`/gifts/${id}`);
    return docRef.set( {purchased: true, purchasedBy: purchasedBy, updateDate: firebase.firestore.FieldValue.serverTimestamp() }, {merge: true});
}

export const markUnpurchased = async ({id}) => {
    console.log(`Marking gift id ${id} as unpurchased`);
    const docRef = firestore.doc(`/gifts/${id}`);
    return docRef.set( {purchased: false, purchasedBy: "", updateDate: firebase.firestore.FieldValue.serverTimestamp() }, {merge: true});
}