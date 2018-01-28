import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { fetchPosts } from '../../src/actions'
import Post from './Post'

import { Item } from 'semantic-ui-react'

class Main extends Component {
  componentDidMount () {
    const { fetchPosts } = this.props

    fetchPosts()
  }

  render () {
    const { posts } = this.props

    return (
      <div>
        <h1>All Posts</h1>
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
  posts: state.posts
})

const mapDispatchToProps = {
  fetchPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
