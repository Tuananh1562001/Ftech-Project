import firebase from "firebase/app";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAaZxdkd0Gr_G1FDLStk8vk3m3C4XYZ9mw",
    authDomain: "vue-3-crud-528e3.firebaseapp.com",
    projectId: "vue-3-crud-528e3",
    storageBucket: "vue-3-crud-528e3.appspot.com",
    messagingSenderId: "229086537981",
    appId: "1:229086537981:web:0f6ed28588bcaa1995b694",
    measurementId: "G-HQ2DSGYVXP"
};

firebase.initializeApp(firebaseConfig)

const fireStoreCore = firebase.firestore()

export{ fireStoreCore }