import { firestore } from './config';

export const createUserDocument = async (user) => {
    // Get a reference to the Firestore document
    const docRef = firestore.doc(`/users/${user.uid}`);

    // Create the user object
    const userProfile = {
        uid: user.uid,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        displayName: user.displayName
    };

    // Write the user data to Cloud Firestore, update if found, new if not.
    return docRef.set(userProfile);
}


export const updateUserDocument = async (user) => {
    const docRef = firestore.doc(`/users/${user.uid}`);
    return docRef.update(user);
}