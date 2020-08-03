import { combineReducers } from 'redux'
import app, { AppState } from './app'

export interface State {
  app: AppState
}
export default combineReducers<State>({ app })
