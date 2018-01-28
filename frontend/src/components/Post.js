import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

import PostVote from './PostVote'

import { Item, Icon } from 'semantic-ui-react'

const Post = ({ post }) => {
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
      </Item.Extra>
    </Item.Content>
  )
}

export default Post
