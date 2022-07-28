import * as admin from 'firebase-admin'
const serviceAccount = require('../service-account.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://teppadev-challenge.firebaseio.com',
})

export const db = admin.firestore()

