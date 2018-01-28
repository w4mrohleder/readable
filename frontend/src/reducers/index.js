import { combineReducers } from 'redux'

import navigation from './navigation'
import categories from './categories'
import posts from './posts'
import post from './post'
import comments from './comments'

const reducer = combineReducers({
  navigation,
  categories,
  posts,
  post,
  comments
})

export default reducer
