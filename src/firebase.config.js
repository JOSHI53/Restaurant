import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAWcAvMHOGX9yhDhzZWGwLlVTMJTYXRKJw",
    authDomain: "restaurantapp-71676.firebaseapp.com",
    databaseURL: "https://restaurantapp-71676-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-71676",
    storageBucket: "restaurantapp-71676.appspot.com",
    messagingSenderId: "347527422190",
    appId: "1:347527422190:web:e0a494f2f94cf602dc93ff"
};


const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };