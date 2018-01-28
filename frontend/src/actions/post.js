import axios from 'axios'

export const FETCH_POST = 'FETCH_POST'

const { REACT_APP_BACKEND } = process.env
const apiHeaders = { headers: { Authorization: 'auth' } }

export function fetchPost (postId) {
  return dispatch =>
    axios(`${REACT_APP_BACKEND}/posts/${postId}`, apiHeaders).then(response => {
      dispatch({
        type: FETCH_POST,
        payload: response.data
      })
    })
}
