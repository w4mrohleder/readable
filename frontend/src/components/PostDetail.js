import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import { fetchPost, editPost, deletePost, votePost, selectCategory, fetchComments } from '../actions'
import Comments from './Comments'
import PostVote from './PostVote'

import { Button, Icon } from 'semantic-ui-react'

class PostDetail extends Component {
  state = { editing: false }

  componentDidMount () {
    const { match: { params: { category, postId } }, fetchPost, selectCategory, fetchComments } = this.props

    fetchPost(postId)
    fetchComments(postId)
    selectCategory(category)
  }

  onEditPost () {
    this.setState(state => ({
      editing: !state.editing
    }))
  }

  onSavePost (postId) {
    const { editPost } = this.props

    if (this.title.value && this.body.value) {
      editPost(postId, this.title.value, this.body.value)
      this.onEditPost()
      this.title.value = ''
      this.body.value = ''
    } else {
      alert('you need to provide post body')
    }
  }

  onDeletePost () {
    const { deletePost, post, history } = this.props
    console.log('onDeletePost')
    deletePost(post.id)
    history.push(`/${post.category}`)
  }

  render () {
    const { post, comments } = this.props
    const { editing } = this.state
    // const commentsOrdered = _.orderBy(comments, 'timestamp', 'asc')

    return (
      <div>

        <h1>
          {post.title}
          <Button size='mini' floated='right' color='red' onClick={() => this.onDeletePost()}>Delete Post</Button>
          {!editing && <Button size='mini' floated='right' onClick={() => this.onEditPost()}>Edit Post</Button>}
        </h1>

        <p>
          <Icon name='user' />
          <b>{post.author}</b>&nbsp;&nbsp;&nbsp;
          <Icon name='calendar' />
          {moment(post.timestamp).format('DD. M. YYYY, H:mm')} &nbsp;&nbsp;&nbsp;
          <Icon name='comments' />&nbsp;
          {post.commentCount}
        </p>

        {editing &&
          <div>
            <div>
              <input defaultValue={post.title} ref={input => (this.title = input)} />
            </div>
            <div>
              <textarea defaultValue={post.body} ref={input => (this.body = input)} />
            </div>
            <Button primary size='mini' onClick={() => this.onSavePost(post.id)}>Save</Button>
          </div>}
        {!editing && <div>{post.body}</div>}

        <div style={{ marginTop: 30 }}>
          <PostVote post={post} />
        </div>

        <Comments comments={comments} />

      </div>
    )
  }
}

const mapStateToProps = state => ({
  post: state.post,
  comments: state.comments
})

const mapDispatchToProps = {
  fetchPost,
  editPost,
  deletePost,
  votePost,
  selectCategory,
  fetchComments
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
