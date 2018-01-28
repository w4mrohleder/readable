import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Navigation from './components/Navigation'
// import Main from './components/Main'
import CategoryList from './components/CategoryList'
import PostDetail from './components/PostDetail'

import { Container } from 'semantic-ui-react'

class App extends Component {
  render () {
    return (
      <Container>
        <Navigation />
        <Route exact path='/' component={CategoryList} />
        <Route exact path='/:category' component={CategoryList} key={Date.now()} />
        <Route exact path='/:category/:postId' component={PostDetail} />
      </Container>
    )
  }
}

export default App
