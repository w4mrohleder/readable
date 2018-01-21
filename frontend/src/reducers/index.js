import { combineReducers } from 'redux'

import { FETCH_CATEGORIES } from '../actions'

const categories = (state = {}, { type, payload }) => {
  switch (type) {
    case FETCH_CATEGORIES:
      console.log('type: FETCH_CATEGORIES')
      return payload.categories

    default:
      console.log('type: DEFAULT')
      return state
  }
}

export default combineReducers({
  categories
})
