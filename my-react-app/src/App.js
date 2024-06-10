import { signInWithPopup } from 'firebase/auth'
import GoogleButton from 'react-google-button'
import { auth, googleAuthProvider } from './firebase'
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

const handleGoogleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, googleAuthProvider)
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result)
    const token = credential.accessToken
    // The signed-in user info.
    console.log(token)
    const user = result.user
    console.log(user)
    // ...
  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code
    const errorMessage = error.message
    // The email of the user's account used.
    const email = error.customData.email
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error)
    // ...
    console.error(
      'Error during sign-in:',
      errorCode,
      errorMessage,
      email,
      credential
    )
  }
}

const App = () => {
  return (
    <>
      <GoogleButton
        type="dark"
        onClick={() => {
          handleGoogleLogin()
        }}
      />
    </>
  )
}

export default App
