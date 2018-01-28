import { SELECT_CATEGORY } from '../actions'

const defaultNav = {
  category: 'home'
}

const navigation = (state = defaultNav, { type, payload }) => {
  switch (type) {
    case SELECT_CATEGORY:
      return { ...state, category: payload }

    default:
      return state
  }
}

export default navigation
