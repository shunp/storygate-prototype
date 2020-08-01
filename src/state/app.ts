import { AnyAction } from 'redux'

export interface AppState {
  editingCaption: boolean
  editingStory: boolean
}
const initialState: AppState = {
  editingCaption: false,
  editingStory: false
}

const TOGGLE_EDIT_CAPTION = 'TOGGLE_EDIT_CAPTION'
const TOGGLE_EDIT_STORY = 'TOGGLE_EDIT_STORY'

export const toggleEditCaption = () => ({
  type: TOGGLE_EDIT_CAPTION
})

export const toggleEditStory = () => ({
  type: TOGGLE_EDIT_STORY
})

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case TOGGLE_EDIT_CAPTION:
      return { ...state, editingCaption: !state.editingCaption }
    case TOGGLE_EDIT_STORY:
      return { ...state, editingStory: !state.editingStory }
    default:
      return state
  }
}
