import React, { Component } from 'react'
import { connect } from 'react-redux'

import { changeSorting } from '../actions'

const buttonStyle = {
  padding: '0.3em 0.5em',
  border: '1px solid gray',
  marginLeft: '1em',
  cursor: 'pointer'
}

class Sorter extends Component {
  render () {
    const { changeSorting, nav: { sorting } } = this.props

    return (
      <div>
        SORT BY
        <span
          style={{ ...buttonStyle, background: sorting === 'timestamp' ? 'lightGrey' : '' }}
          onClick={() => changeSorting('timestamp')}
        >
          time
        </span>
        <span
          style={{ ...buttonStyle, background: sorting === 'voteScore' ? 'lightGrey' : '' }}
          onClick={() => changeSorting('voteScore')}
        >
          score
        </span>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  nav: state.navigation
})

const mapDispatchToProps = {
  changeSorting
}

export default connect(mapStateToProps, mapDispatchToProps)(Sorter)
