import auth from '@react-native-firebase/auth'
import { AlertError } from '@/Services/Alerts'

class AuthManager {
  constructor() {}

  createUserWithEmailAndPassword = async (email, password) => {
    try {
      const response = await auth().createUserWithEmailAndPassword(
        email,
        password,
      )

      return response
    } catch (error) {
      AlertError(error)
      throw error
    }
  }

  signInWithEmailAndPassword = async (email, password) => {
    try {
      const response = await auth().signInWithEmailAndPassword(email, password)

      return response
    } catch (error) {
      AlertError(error)
      throw error
    }
  }

  signOut = async () => {
    try {
      await auth().signOut()
    } catch (error) {
      AlertError(error)
      throw error
    }
  }
}
export default new AuthManager()
