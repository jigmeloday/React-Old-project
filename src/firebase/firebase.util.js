import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {

    apiKey: "AIzaSyAHM3NCy64GudT5qKC8MozQGj6gcUCj8tQ",
    authDomain: "learningreact-4d40d.firebaseapp.com",
    projectId: "learningreact-4d40d",
    storageBucket: "learningreact-4d40d.appspot.com",
    messagingSenderId: "1064853304118",
    appId: "1:1064853304118:web:223ee6ed1a8d90982e3997",
    measurementId: "G-4TGN0F2SJS"


};

export const createUserProfileDoc = async (userAuth, additoinalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists){
     const { displayName, email } = userAuth;
     const createAt = new Date();
     try {
         await userRef.set(
             {
                 displayName,
                 email,
                 createAt,
                 ...additoinalData
             }
         )
     } catch (e) {
            console.log('error: ', e.message)
     }
  }
  return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
