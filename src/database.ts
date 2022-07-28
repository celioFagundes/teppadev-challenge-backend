import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBnvxa2M0IE5OJED2yY3zcAxY97KYZbkeQ',
  authDomain: 'teppadev-challenge.firebaseapp.com',
  projectId: 'teppadev-challenge',
  storageBucket: 'teppadev-challenge.appspot.com',
  messagingSenderId: '562562759875',
  appId: '1:562562759875:web:55de0b65818a164ca5b676',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db