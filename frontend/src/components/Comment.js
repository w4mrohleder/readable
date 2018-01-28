import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import { voteComment, editComment, deleteComment } from '../actions'

import { Comment, Icon, Button } from 'semantic-ui-react'

class CommentComponent extends Component {
  state = { editing: false }

  onVoteComment (commentId, option) {
    const { voteComment } = this.props

    voteComment(commentId, option)
  }

  onDeleteComment (commentId) {
    const { deleteComment } = this.props

    deleteComment(commentId)
  }

  onEditComment () {
    this.setState(state => ({
      editing: !state.editing
    }))
  }

  onSaveComment (commentId) {
    const { editComment } = this.props

    if (this.comment.value) {
      editComment(commentId, this.comment.value)
      this.onEditComment()
      this.comment.value = ''
    } else {
      alert('you need to provide and comment body')
    }
  }

  render () {
    const { comment } = this.props
    const { editing } = this.state

    return (
      <Comment>

        <Comment.Content>

          <Comment.Author as='a'>{comment.author}</Comment.Author>

          <Comment.Metadata>
            <div>{moment(comment.timestamp).format('DD. M. YYYY, H:mm')}</div>
          </Comment.Metadata>

          <Comment.Text>
            {!editing && comment.body}
            {editing && <textarea defaultValue={comment.body} ref={input => (this.comment = input)} />}
          </Comment.Text>

          {!editing &&
            <Comment.Actions>
              <Comment.Action onClick={() => this.onEditComment(comment.id)}>
                Edit
              </Comment.Action>
              <Comment.Action onClick={() => this.onDeleteComment(comment.id)}>
                Delete
              </Comment.Action>
              <Comment.Action>
                <Icon name='thumbs up' onClick={() => this.onVoteComment(comment.id, 'upVote')} />
              </Comment.Action>
              {comment.voteScore}&nbsp;&nbsp;&nbsp;&nbsp;
              <Comment.Action>
                <Icon name='thumbs down' onClick={() => this.onVoteComment(comment.id, 'downVote')} />
              </Comment.Action>
            </Comment.Actions>}

          {editing &&
            <Comment.Actions>
              <Comment.Action onClick={() => this.onSaveComment(comment.id)}>
                <Button primary size='mini'>Save</Button>
              </Comment.Action>

            </Comment.Actions>}

        </Comment.Content>

      </Comment>
    )
  }
}

const mapStateToProps = state => ({
  post: state.post,
  comments: state.comments
})

const mapDispatchToProps = {
  voteComment,
  editComment,
  deleteComment
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentComponent)
