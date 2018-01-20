export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'

const { REACT_APP_BACKEND } = process.env
const apiHeaders = { headers: { Authorization: 'test' } }

export function fetchCategories () {
  return {
    type: FETCH_CATEGORIES,
    payload: {
      categories: fetch(`${REACT_APP_BACKEND}/categories`, apiHeaders).then(response => response.json())
    }
  }
}
