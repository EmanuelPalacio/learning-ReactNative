import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import firebase from './firebase'
import userDataAdapter from '../../adapters/userDataAdapter'

const auth = getAuth(firebase)

const authService = async ({ email, password }) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password)
    console.log('🚀 ~ file: authService.js:10 ~ authService ~ user:', user)
    return userDataAdapter(user)
  } catch (error) {
    throw error.code
  }
}
export default authService
