import { combineReducers } from 'redux'
import { FETCH_CATEGORIES } from '../actions'

const categories = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      console.log('type: FETCH_CATEGORIES')
      return {
        ...state,
        categories: action.payload.categories
      }
    default:
      console.log('type: DEFAULT')
      return state
  }
}

export default combineReducers({
  categories
})
