import axios from 'axios'

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'

const { REACT_APP_BACKEND } = process.env
const apiHeaders = { headers: { Authorization: 'auth' } }

export function fetchCategories () {
  return dispatch =>
    axios(`${REACT_APP_BACKEND}/categories`, apiHeaders).then(response => {
      dispatch({
        type: FETCH_CATEGORIES,
        payload: response.data
      })
    })
}
