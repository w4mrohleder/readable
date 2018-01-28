import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addPost, editPost } from '../actions'

import { Form, Button } from 'semantic-ui-react'

class PostForm extends Component {
  onAddPost () {
    const { addPost, editPost, category, post } = this.props

    if (this.title.value && this.author.value && this.body.value) {
      if (post) {
        editPost(this.body.value)
      } else {
        addPost(category, this.title.value, this.body.value, this.author.value)
      }
      this.title.value = ''
      this.author.value = ''
      this.body.value = ''
    } else {
      alert('you need to provide all fields')
    }
  }

  render () {
    return (
      <Form style={{ marginBottom: 20 }}>
        <input style={{ margin: '30px 0 10px' }} placeholder='title' ref={input => (this.title = input)} />
        <input style={{ marginBottom: 10 }} placeholder='author' ref={input => (this.author = input)} />
        <textarea style={{ marginBottom: 10 }} placeholder='body' ref={input => (this.body = input)} />
        <Button content='Add Post' labelPosition='left' icon='edit' primary onClick={() => this.onAddPost()} />
      </Form>
    )
  }
}

const mapDispatchToProps = {
  addPost,
  editPost
}

export default connect(null, mapDispatchToProps)(PostForm)
