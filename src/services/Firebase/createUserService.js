import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  deleteUser,
} from 'firebase/auth'
import firebase from './firebase'

const auth = getAuth(firebase)
const createUserService = async ({ email, password, name }) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password)

    await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: 'https://example.com/jane-q-user/profile.jpg',
    })

    return auth.currentUser
  } catch (error) {
    deleteUser(auth.currentUser)
    throw error.code
  }
}
export default createUserService
