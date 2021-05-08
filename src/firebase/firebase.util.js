import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAeCoYlOzgtUxwtKaftDjGtgNBF4McXF7g",
  authDomain: "e-shop-6cf7e.firebaseapp.com",
  projectId: "e-shop-6cf7e",
  storageBucket: "e-shop-6cf7e.appspot.com",
  messagingSenderId: "812232753119",
  appId: "1:812232753119:web:2d61d0338c462758c08e6a",
  measurementId: "G-XKD0HGCNTM",
};

export const createUserProfileDoc = async (userAuth, additoinalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additoinalData,
      });
    } catch (e) {
      console.log("error: ", e.message);
    }
  }
  return userRef;
};

export const convertCollectionsSnapShotToMap = (collection) => {
  const transformCollection = collection.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transformCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
