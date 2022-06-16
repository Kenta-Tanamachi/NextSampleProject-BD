// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// import { auth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCafeuTpgSn4OKONVzx7QgaLShaysUDmTU',
  authDomain: 'nextsampleproject-bd.firebaseapp.com',
  projectId: 'nextsampleproject-bd',
  storageBucket: 'nextsampleproject-bd.appspot.com',
  messagingSenderId: '176577891751',
  appId: '1:176577891751:web:273df57cf5df0dc898fa82',
  measurementId: 'G-3CYYPJJ80Z',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
