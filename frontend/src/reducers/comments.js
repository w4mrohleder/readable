import _ from 'lodash'

import { FETCH_COMMENTS, ADD_COMMENT, VOTE_COMMENT, DELETE_COMMENT, EDIT_COMMENT } from '../actions'

const comments = (state = {}, { type, payload }) => {
  switch (type) {
    case FETCH_COMMENTS:
      const comments = {}
      payload.forEach(comment => (comments[comment.id] = comment))
      return comments

    case ADD_COMMENT:
      return { ...state, [payload.id]: payload }

    case VOTE_COMMENT:
      return { ...state, [payload.id]: payload }

    case DELETE_COMMENT:
      return _.omit(state, payload.id)

    case EDIT_COMMENT:
      return { ...state, [payload.id]: payload }

    default:
      return state
  }
}

export default comments
