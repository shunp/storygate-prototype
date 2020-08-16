import { PersonService } from 'src/services/PersonService'
import { AnyAction } from 'redux'
import { LoginUser } from 'src/services/interfaces/Auth'
import { LoginUserModel } from 'src/services/AuthService/LoginUserModel'
import { AuthService } from 'src/services/AuthService'

export interface AppState {
  loginUser: LoginUser
  editingCaption: boolean
  editingStory: boolean
  editingPortfolio: boolean
  editingCommunity: boolean
}
const initialState: AppState = {
  loginUser: LoginUserModel.guest(),
  editingCaption: false,
  editingStory: false,
  editingPortfolio: false,
  editingCommunity: false
}

const SET_LOGIN_USER = 'SET_LOGIN_USER'
const TOGGLE_EDIT_CAPTION = 'TOGGLE_EDIT_CAPTION'
const TOGGLE_EDIT_STORY = 'TOGGLE_EDIT_STORY'
const TOGGLE_EDIT_PORTFOLIO = 'TOGGLE_EDIT_PORTFOLIO'
const TOGGLE_EDIT_COMMUNITY = 'TOGGLE_EDIT_COMMUNITY'
const CLEAR_EDITING_STATE = 'CLEAR_EDITING_STATE'

export const loginAction = (loginUser: LoginUser) => {
  PersonService.incrementLoginCount(loginUser.uid)
  return {
    type: SET_LOGIN_USER,
    loginUser
  }
}
export const logoutAction = async () => {
  await AuthService.logout()
  return {
    type: SET_LOGIN_USER,
    loginUser: LoginUserModel.guest()
  }
}

export const clearEditingStateAction = () => ({
  type: CLEAR_EDITING_STATE
})
export const toggleEditingCaptionAction = () => ({
  type: TOGGLE_EDIT_CAPTION
})

export const toggleEditingStoryAction = () => ({
  type: TOGGLE_EDIT_STORY
})

export const toggleEditingPortfolioAction = () => ({
  type: TOGGLE_EDIT_PORTFOLIO
})

export const toggleEditingCommunityAction = () => ({
  type: TOGGLE_EDIT_COMMUNITY
})

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_LOGIN_USER:
      return { ...state, loginUser: action.loginUser }
    case TOGGLE_EDIT_CAPTION:
      return { ...state, editingCaption: !state.editingCaption }
    case TOGGLE_EDIT_STORY:
      return { ...state, editingStory: !state.editingStory }
    case TOGGLE_EDIT_PORTFOLIO:
      return { ...state, editingPortfolio: !state.editingPortfolio }
    case TOGGLE_EDIT_COMMUNITY:
      return { ...state, editingCommunity: !state.editingCommunity }
    case CLEAR_EDITING_STATE:
      return { ...state, editingCaption: false, editingStory: false, editingPortfolio: false, editingCommunity: false }
    default:
      return state
  }
}
