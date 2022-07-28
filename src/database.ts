import * as admin from 'firebase-admin'
const serviceAccount = require('../service-account.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://teppadev-challenge.firebaseio.com',
})

const db = admin.firestore()
export { admin, db }
