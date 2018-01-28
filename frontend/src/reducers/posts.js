import _ from 'lodash'

import { FETCH_POSTS, ADD_POST, VOTE_POST, DELETE_POST, EDIT_POST } from '../actions'

const posts = (state = {}, { type, payload }) => {
  switch (type) {
    case FETCH_POSTS:
      const posts = {}
      payload.forEach(post => (posts[post.id] = post))
      return posts

    case ADD_POST:
      return { ...state, [payload.id]: payload }

    case VOTE_POST:
      return { ...state, [payload.id]: payload }

    case DELETE_POST:
      return _.omit(state, payload.id)

    case EDIT_POST:
      return { ...state, [payload.id]: payload }

    default:
      return state
  }
}

export default posts
