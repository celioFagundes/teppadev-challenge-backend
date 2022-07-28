"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("firebase/app");
const firestore_1 = require("firebase/firestore");
const firebaseConfig = {
    apiKey: 'AIzaSyBnvxa2M0IE5OJED2yY3zcAxY97KYZbkeQ',
    authDomain: 'teppadev-challenge.firebaseapp.com',
    projectId: 'teppadev-challenge',
    storageBucket: 'teppadev-challenge.appspot.com',
    messagingSenderId: '562562759875',
    appId: '1:562562759875:web:55de0b65818a164ca5b676',
};
const app = (0, app_1.initializeApp)(firebaseConfig);
const db = (0, firestore_1.getFirestore)(app);
exports.default = db;
