import * as admin from 'firebase-admin'
import dotenv from 'dotenv'

dotenv.config()

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.PROJECT_ID,
    clientEmail: process.env.CLIENT_EMAIL,
    privateKey: process.env.PRIVATE_KEY,
  }),
  databaseURL: 'https://teppadev-challenge.firebaseio.com',
})

const db = admin.firestore()
export { admin, db }
