import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCHUL0XSFETPzCVsYzJLtcJvqcxPOK6bAc",
    authDomain: "crwn-db-45b5c.firebaseapp.com",
    databaseURL: "https://crwn-db-45b5c.firebaseio.com",
    projectId: "crwn-db-45b5c",
    storageBucket: "crwn-db-45b5c.appspot.com",
    messagingSenderId: "777618204139",
    appId: "1:777618204139:web:62ca6e29a0f6931c0fa5ae",
    measurementId: "G-PJLQCSP5FS"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot= await userRef.get()

    if(!snapshot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('error cretaing user', error.message)
        }
    }

    return userRef;
}


firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore()


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });


export const signInWithGoogle = () => {
    auth.signInWithPopup(provider)
}

export default firebase;


