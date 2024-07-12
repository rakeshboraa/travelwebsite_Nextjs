import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCPpyXangSvP4wuUY5b5rlf-wxPOJC1LJU",
    authDomain: "dojoin-d99bd.firebaseapp.com",
    projectId: "dojoin-d99bd",
    storageBucket: "dojoin-d99bd.appspot.com",
    messagingSenderId: "633078251134",
    appId: "1:633078251134:web:6fad8d1162f08f3159e22f",
    measurementId: "G-ZCSYTG4089"
};

const app = initializeApp(firebaseConfig);

export { app }
