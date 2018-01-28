import { FETCH_POST, EDIT_POST, VOTE_POST } from '../actions'

const post = (state = {}, { type, payload }) => {
  switch (type) {
    case FETCH_POST:
      return payload

    case EDIT_POST:
      return payload

    case VOTE_POST:
      return payload

    default:
      return state
  }
}

export default post
