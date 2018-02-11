import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { connect } from 'react-redux'

import { deletePost } from '../actions'
import PostVote from './PostVote'

import { Item, Icon } from 'semantic-ui-react'

class Post extends Component {
  onDeletePost = () => {
    const { deletePost, post, history } = this.props

    deletePost(post.id)
  }

  render () {
    const { post } = this.props

    return (
      <Item.Content>

        <Item.Header>
          <Link to={`/${post.category}/${post.id}`}>{post.title}</Link>
        </Item.Header>

        <Item.Meta>
          <Icon name='user' />
          <b>{post.author}</b>
          &nbsp;&nbsp;
          <Icon name='calendar' />
          {moment(post.timestamp).format('DD. M. YYYY, H:mm')}
          &nbsp;&nbsp;&nbsp;
          <Icon name='comments' />&nbsp;
          {post.commentCount}
        </Item.Meta>

        <Item.Description>
          {post.body}
        </Item.Description>

        <Item.Extra>
          <PostVote post={post} />
          <Link to={{ pathname: `/${post.category}/${post.id}`, state: { editing: true } }}>
            <Icon name='edit' />
          </Link>

          <Icon color='red' name='delete' onClick={() => this.onDeletePost()} style={{ cursor: 'pointer' }} />

        </Item.Extra>

      </Item.Content>
    )
  }
}

const mapDispatchToProps = {
  deletePost
}

export default connect(null, mapDispatchToProps)(Post)
