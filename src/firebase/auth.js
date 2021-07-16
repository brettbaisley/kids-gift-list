import firebase from 'firebase/app';
import 'firebase/auth';
import { createUserDocument } from './user';

export const signup = async ( { firstName, lastName, email, password }) => {

    // TODO: Add error handling to this...

    // Creating a new user in Firebase Authentication
    const resp = await firebase.auth().createUserWithEmailAndPassword(email, password);
    const user = resp.user;

    // As it only had email/password, setting the Firebase User displayName property
    await user.updateProfile( { displayName: `${firstName} ${lastName}`});

    // Adding a user to my Firestore database, passing in the Firebase User, plus, firstName and lastName
    await createUserDocument({ firstName: firstName, lastName: lastName, ...user});
    return user;
}

export const logout = () => {
    return firebase.auth().signOut();
};

export const login = async ({ email, password }) => {
    const resp = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
    return resp.user;
};
