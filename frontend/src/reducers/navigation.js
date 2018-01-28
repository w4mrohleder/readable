import { SELECT_CATEGORY, CHANGE_SORTING } from '../actions'

const defaultNav = {
  category: 'home',
  sorting: 'timestamp'
}

const navigation = (state = defaultNav, { type, payload }) => {
  switch (type) {
    case SELECT_CATEGORY:
      return { ...state, category: payload }

    case CHANGE_SORTING:
      return { ...state, sorting: payload }

    default:
      return state
  }
}

export default navigation
