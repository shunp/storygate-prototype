import { signOut, signInWithFacebook } from 'src/services/firebase/auth'
import { LoginUserModel } from './LoginUserModel'
import { LoginUser } from '../interfaces/Auth'

class Service {
  login = async (): Promise<LoginUser> => {
    const credential = await signInWithFacebook()
    return LoginUserModel.fromUserCredential(credential)
  }

  logout = (): LoginUser => {
    signOut()
    return LoginUserModel.guest()
  }
}

export const AuthService = new Service()
