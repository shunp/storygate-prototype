import { signOut, signInWithFacebook, signUpWithFacebook, currentUser } from 'src/services/firebase/auth'
import { LoginUserModel } from './LoginUserModel'
import { LoginUser } from '../interfaces/Auth'

class Service {
  loadStoredUser = (): LoginUser => {
    const storedUser = currentUser()
    if (!storedUser) {
      return LoginUserModel.guest()
    }
    return LoginUserModel.fromUserCredential(storedUser)
  }

  login = async (): Promise<LoginUser> => {
    const credential = await signInWithFacebook()
    return LoginUserModel.fromUserCredential(credential)
  }

  signUp = async () => {
    const credential = await signUpWithFacebook()
    return {
      uid: credential.user.uid,
      name: credential.additionalUserInfo.profile.name,
      img: credential.additionalUserInfo?.profile?.picture?.data?.url
    }
  }

  logout = (): LoginUser => {
    signOut()
    return LoginUserModel.guest()
  }
}

export const AuthService = new Service()
