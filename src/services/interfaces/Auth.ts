export interface LoginUser {
  readonly uid: string
  readonly loggedIn: boolean
  readonly editablePage: (path: string) => boolean
}
