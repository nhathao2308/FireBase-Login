import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAEcczN2LwBXuZ2_1W6sjF5n-UxsVMyE80',
  authDomain: 'fticket-9d523.firebaseapp.com',
  projectId: 'fticket-9d523',
  storageBucket: 'fticket-9d523.appspot.com',
  messagingSenderId: '906972477393',
  appId: '1:906972477393:web:bd7724a28184ffd70312f0',
  measurementId: 'G-D3KXQ41FLR'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth()
export const googleAuthProvider = new GoogleAuthProvider()

export default app
