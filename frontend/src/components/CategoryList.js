import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { fetchPosts, selectCategory } from '../actions'
import Post from './Post'
import PostForm from './PostForm'

import { Item, Message, Button } from 'semantic-ui-react'

class CategoryList extends Component {
  state = { adding: false }

  constructor () {
    super()

    this.onNewPost = this.onNewPost.bind(this)
  }

  componentDidMount () {
    const { match: { params: { category } }, fetchPosts, selectCategory } = this.props

    selectCategory(category)
    fetchPosts(category)
  }

  onNewPost () {
    this.setState(state => ({
      adding: !state.adding
    }))
  }

  render () {
    const { posts, nav: { category } } = this.props
    const { adding } = this.state

    return (
      <div>
        <h1>
          {_.capitalize(category)} Posts
          <Button size='mini' floated='right' onClick={this.onNewPost}>New post</Button>
        </h1>

        {adding && <PostForm category={category} />}

        {_.isEmpty(posts) && <Message info>There are currently no posts in this category</Message>}

        <Item.Group>
          {_.map(posts, (post, index) => (
            <Item key={index}>
              <Post post={post} />
            </Item>
          ))}
        </Item.Group>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  nav: state.navigation
})

const mapDispatchToProps = {
  fetchPosts,
  selectCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)
