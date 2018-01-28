export const SELECT_CATEGORY = 'SELECT_CATEGORY'
export const CHANGE_SORTING = 'CHANGE_SORTING'

export function selectCategory (category) {
  return {
    type: SELECT_CATEGORY,
    payload: category
  }
}

export function changeSorting (type) {
  return {
    type: CHANGE_SORTING,
    payload: type
  }
}
