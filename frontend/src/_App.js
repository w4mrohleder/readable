import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import CategoryList from './components/CategoryList'
import PostDetail from './components/PostDetail'

import { fetchCategories } from '../src/actions'

class App extends Component {
  state = {}

  componentDidMount () {
    const { getCategories } = this.props
    // const categories = getCategories()
    // this.setState({ categories })
    getCategories()
  }

  render () {
    const propsCategories = this.props.categories
    // const stateCategories = this.state.categories

    console.log(propsCategories)
    // console.log(stateCategories)

    return (
      <div>
        <Route exact path='/' render={() => <div>MAIN</div>} />
        <Route exact path='/:category' component={CategoryList} />
        <Route exact path='/:category/:post_id' component={PostDetail} />
      </div>
    )
  }
}

const mapStateToProps = ({ categories }) => ({
  categories
})

const mapDispatchToProps = dispatch => {
  return {
    getCategories: data => dispatch(fetchCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
