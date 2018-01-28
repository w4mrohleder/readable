import { FETCH_CATEGORIES } from '../actions'

const categories = (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_CATEGORIES:
      return payload.categories

    default:
      return state
  }
}

export default categories
