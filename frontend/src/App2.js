import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import CategoryList from './components/CategoryList'
import PostDetail from './components/PostDetail'

import { fetchCategories } from '../src/actions'

class App extends Component {
  componentDidMount () {
    const { fetchCategories } = this.props
    fetchCategories()
  }

  render () {
    const { categories } = this.props
    console.log(categories)

    return (
      <div>
        <Route exact path='/' render={() => <div>MAIN</div>} />
        <Route exact path='/:category' component={CategoryList} />
        <Route exact path='/:category/:post_id' component={PostDetail} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories
})

const mapDispatchToProps = {
  fetchCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
