import { LoginUser } from 'src/services/interfaces/Auth'
import { UserCredential } from 'src/services/firebase/auth'

export class LoginUserModel implements LoginUser {
  constructor(private _uid: string) {}

  static guest(): LoginUser {
    return new LoginUserModel('')
  }

  static fromUserCredential(credential: UserCredential): LoginUser {
    return new LoginUserModel(credential.uid)
  }

  get uid(): string {
    return this._uid
  }

  get loggedIn(): boolean {
    return !!this._uid
  }
}
