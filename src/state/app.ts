import { AnyAction } from 'redux'
import { LoginUser } from 'src/services/interfaces/Auth'
import { LoginUserModel } from 'src/services/AuthService/LoginUserModel'
import { AuthService } from 'src/services/AuthService'

export interface AppState {
  loginUser: LoginUser
  editingCaption: boolean
  editingStory: boolean
}
const initialState: AppState = {
  loginUser: LoginUserModel.guest(),
  editingCaption: false,
  editingStory: false
}

const SET_LOGIN_USER = 'SET_LOGIN_USER'
const TOGGLE_EDIT_CAPTION = 'TOGGLE_EDIT_CAPTION'
const TOGGLE_EDIT_STORY = 'TOGGLE_EDIT_STORY'

export const publishLogin = (loginUser: LoginUser) => ({
  type: SET_LOGIN_USER,
  loginUser
})
export const publishLogout = () => {
  AuthService.logout()
  return {
    type: SET_LOGIN_USER,
    loginUser: LoginUserModel.guest()
  }
}

export const toggleEditCaption = () => ({
  type: TOGGLE_EDIT_CAPTION
})

export const toggleEditStory = () => ({
  type: TOGGLE_EDIT_STORY
})

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_LOGIN_USER:
      return { ...state, loginUser: action.loginUser }
    case TOGGLE_EDIT_CAPTION:
      return { ...state, editingCaption: !state.editingCaption }
    case TOGGLE_EDIT_STORY:
      return { ...state, editingStory: !state.editingStory }
    default:
      return state
  }
}
