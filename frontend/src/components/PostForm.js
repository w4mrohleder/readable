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
        // if adding new post in 'Home', use category value from Select
        if (this.category) {
          addPost(this.category.value, this.title.value, this.body.value, this.author.value)
        } else {
          addPost(category, this.title.value, this.body.value, this.author.value)
        }
      }
      this.title.value = ''
      this.author.value = ''
      this.body.value = ''
    } else {
      alert('you need to provide all fields')
    }
  }

  render () {
    const { nav, categories } = this.props

    return (
      <Form style={{ marginBottom: 20 }}>
        {!nav.category &&
          <select ref={input => (this.category = input)}>
            {categories.map((category, index) => <option key={index} value={category.name}>{category.name}</option>)}
          </select>}
        <input style={{ margin: '30px 0 10px' }} placeholder='title' ref={input => (this.title = input)} />
        <input style={{ marginBottom: 10 }} placeholder='author' ref={input => (this.author = input)} />
        <textarea style={{ marginBottom: 10 }} placeholder='body' ref={input => (this.body = input)} />
        <Button content='Add Post' labelPosition='left' icon='edit' primary onClick={() => this.onAddPost()} />
      </Form>
    )
  }
}

const mapStateToProps = state => ({
  nav: state.navigation,
  categories: state.categories
})

const mapDispatchToProps = {
  addPost,
  editPost
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
