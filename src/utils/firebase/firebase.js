import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, } from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc, // get doc data
    setDoc, // set doc data
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCmd71fYbGYCB6tzeUnSvUfyJZ_G-bJtX8",
    authDomain: "bg-apparel-db.firebaseapp.com",
    projectId: "bg-apparel-db",
    storageBucket: "bg-apparel-db.appspot.com",
    messagingSenderId: "1068792977506",
    appId: "1:1068792977506:web:b71c6396b46d4501f5593b"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account",
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            });
        }
        catch(err) {
            console.log('error creating user', err.message);
        }
    }
    return userDocRef;
    // check if user data exists
    // return data

    // if user does not exist
    // create/set the doc with the data from userAuth in my collection
  };