import React, { Component } from 'react'
import { connect } from 'react-redux'

import _ from 'lodash'

import { addComment } from '../actions'
import CommentComponent from './Comment'

import { Button, Comment, Form, Header, Message } from 'semantic-ui-react'

class Comments extends Component {
  constructor () {
    super()

    this.onAddComment = this.onAddComment.bind(this)
  }

  onAddComment () {
    const { addComment, post } = this.props

    if (this.author.value && this.comment.value) {
      addComment(post.id, this.comment.value, this.author.value)
      this.author.value = ''
      this.comment.value = ''
    } else {
      alert('you need to provide author and comment')
    }
  }

  render () {
    const { comments } = this.props
    // const commentsOrdered = _.orderBy(comments, 'timestamp', 'asc')

    return (
      <Comment.Group style={{ marginTop: 70 }}>
        <Header as='h3' dividing>Comments</Header>

        {_.isEmpty(comments) && <Message info>There are currently no comments for this post</Message>}

        {_.map(comments, (comment, index) => <CommentComponent comment={comment} key={index} />)}

        <Form>
          <input style={{ margin: '30px 0 10px' }} placeholder='author' ref={input => (this.author = input)} />
          <textarea style={{ marginBottom: 10 }} placeholder='comment' ref={input => (this.comment = input)} />
          <Button content='Add Comment' labelPosition='left' icon='edit' primary onClick={this.onAddComment} />
        </Form>

      </Comment.Group>
    )
  }
}
const mapStateToProps = state => ({
  post: state.post,
  comments: state.comments
})

const mapDispatchToProps = {
  addComment
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
