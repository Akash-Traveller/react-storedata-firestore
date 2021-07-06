import firebase from "firebase";

var firebaseApp = firebase.initializeApp ({
        apiKey: "AIzaSyA2XuL_e1zJTuHh_UdBVycZZwWW10MRdTQ",
    authDomain: "react-store-retrive.firebaseapp.com",
    projectId: "react-store-retrive",
    storageBucket: "react-store-retrive.appspot.com",
    messagingSenderId: "553173830728",
    appId: "1:553173830728:web:811f5003ae0b572cf9dc7d"
})

var db = firebaseApp.firestore();

export { db };
