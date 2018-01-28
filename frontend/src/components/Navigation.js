import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchCategories, selectCategory } from '../../src/actions'

import { Menu, Icon } from 'semantic-ui-react'

class Navigation extends Component {
  constructor () {
    super()

    this.handleItemClick = this.handleItemClick.bind(this)
  }

  componentDidMount () {
    const { fetchCategories } = this.props

    fetchCategories()
  }

  handleItemClick (e, { name }) {
    const { selectCategory } = this.props

    selectCategory(name)
  }

  render () {
    const { categories, nav } = this.props

    return (
      <Menu inverted>

        <Menu.Item as={Link} to='/' name='home' active={nav.category === 'home'} onClick={this.handleItemClick}>
          <Icon name='home' />Home
        </Menu.Item>

        {categories.map((category, index) => (
          <Menu.Item
            as={Link}
            to={`/${category.name}`}
            key={index}
            name={category.name}
            active={nav.category === category.name}
            onClick={this.handleItemClick}
          >
            {category.name}
          </Menu.Item>
        ))}

      </Menu>
    )
  }
}

const mapStateToProps = state => ({
  nav: state.navigation,
  categories: state.categories
})

const mapDispatchToProps = {
  fetchCategories,
  selectCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
