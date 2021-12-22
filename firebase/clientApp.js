// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  // measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  apiKey: 'AIzaSyBAo2OhAb1YEGwwP3x80M3pT10zOnExoOE',
  authDomain: 'pappasarveliste.firebaseapp.com',
  projectId: 'pappasarveliste',
  storageBucket: 'pappasarveliste.appspot.com',
  messagingSenderId: '627068275005',
  appId: '1:627068275005:web:18696812f4999c72fe9d54',
  measurementId: 'G-BM4NSMNB0M',
};

// Firebase v8
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;

// Firebase v9
// firebase.initializeApp(firebaseConfig);

// export const firebaseApp = initializeApp(firebaseConfig);
// export const db = getFirestore();
// const auth = getAuth(firebaseApp);

// export var db = firebase.firestore();
