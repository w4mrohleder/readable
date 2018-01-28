import axios from 'axios'
const uuid = require('uuid/v1')

export const FETCH_COMMENTS = 'FETCH_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const VOTE_COMMENT = 'VOTE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'

const { REACT_APP_BACKEND } = process.env
const apiHeaders = { headers: { Authorization: 'auth' } }

export function fetchComments (postId) {
  return dispatch =>
    axios(`${REACT_APP_BACKEND}/posts/${postId}/comments`, apiHeaders).then(response => {
      dispatch({
        type: FETCH_COMMENTS,
        payload: response.data
      })
    })
}

export function addComment (parentId, body, author) {
  const comment = {
    id: uuid(),
    timestamp: Date.now(),
    parentId,
    body,
    author
  }

  return dispatch =>
    axios.post(`${REACT_APP_BACKEND}/comments`, comment, apiHeaders).then(response => {
      dispatch({
        type: ADD_COMMENT,
        payload: response.data
      })
    })
}

export function voteComment (commentId, option) {
  return dispatch =>
    axios.post(`${REACT_APP_BACKEND}/comments/${commentId}`, { option }, apiHeaders).then(response => {
      dispatch({
        type: VOTE_COMMENT,
        payload: response.data
      })
    })
}

export function deleteComment (commentId) {
  return dispatch =>
    axios.delete(`${REACT_APP_BACKEND}/comments/${commentId}`, apiHeaders).then(response => {
      dispatch({
        type: DELETE_COMMENT,
        payload: response.data
      })
    })
}

export function editComment (commentId, body) {
  const comment = {
    timestamp: Date.now(),
    body
  }

  return dispatch =>
    axios.put(`${REACT_APP_BACKEND}/comments/${commentId}`, comment, apiHeaders).then(response => {
      dispatch({
        type: EDIT_COMMENT,
        payload: response.data
      })
    })
}
