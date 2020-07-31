import { AnyAction } from 'redux'

const initialState = {
  editingCaption: false
}

const TOGGLE_EDIT_CAPTION = 'TOGGLE_EDIT_CAPTION'

export const toggleEditCaption = () => ({
  type: TOGGLE_EDIT_CAPTION
})

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case TOGGLE_EDIT_CAPTION:
      return { ...state, editingCaption: !state.editingCaption }
    default:
      return state
  }
}
