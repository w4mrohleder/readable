import axios from 'axios'
const uuid = require('uuid/v1')

export const FETCH_POSTS = 'FETCH_POSTS'
export const ADD_POST = 'ADD_POST'
export const VOTE_POST = 'VOTE_POST'
export const DELETE_POST = 'DELETE_POST'
export const EDIT_POST = 'EDIT_POST'

const { REACT_APP_BACKEND } = process.env
const apiHeaders = { headers: { Authorization: 'auth' } }

export function fetchPosts (category) {
  return dispatch =>
    axios(`${REACT_APP_BACKEND}/${category ? category + '/' : ''}posts`, apiHeaders).then(response => {
      dispatch({
        type: FETCH_POSTS,
        payload: response.data
      })
    })
}

export function addPost (category, title, body, author) {
  const post = {
    id: uuid(),
    timestamp: Date.now(),
    category,
    title,
    body,
    author
  }

  return dispatch =>
    axios.post(`${REACT_APP_BACKEND}/posts`, post, apiHeaders).then(response => {
      dispatch({
        type: ADD_POST,
        payload: response.data
      })
    })
}

export function votePost (postId, option) {
  return dispatch =>
    axios.post(`${REACT_APP_BACKEND}/posts/${postId}`, { option }, apiHeaders).then(response => {
      dispatch({
        type: VOTE_POST,
        payload: response.data
      })
    })
}

export function deletePost (postId) {
  return dispatch =>
    axios.delete(`${REACT_APP_BACKEND}/posts/${postId}`, apiHeaders).then(response => {
      dispatch({
        type: DELETE_POST,
        payload: response.data
      })
    })
}

export function editPost (postId, title, body) {
  const post = {
    title,
    body
  }

  return dispatch =>
    axios.put(`${REACT_APP_BACKEND}/posts/${postId}`, post, apiHeaders).then(response => {
      dispatch({
        type: EDIT_POST,
        payload: response.data
      })
    })
}
