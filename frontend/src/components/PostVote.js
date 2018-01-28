import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { votePost } from '../actions'

class PostVote extends Component {
  onVotePost (postId, option) {
    const { votePost } = this.props

    votePost(postId, option)
  }

  render () {
    const { post } = this.props

    return (
      <div>
        <Icon link name='thumbs up' onClick={() => this.onVotePost(post.id, 'upVote')} />&nbsp;&nbsp;
        {post.voteScore}&nbsp;&nbsp;&nbsp;
        <Icon link name='thumbs down' onClick={() => this.onVotePost(post.id, 'downVote')} />
      </div>
    )
  }
}

const mapDispatchToProps = {
  votePost
}

export default connect(null, mapDispatchToProps)(PostVote)
