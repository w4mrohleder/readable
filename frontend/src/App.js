import React, { Component } from 'react'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      backend: 'backend-data'
    }
  }

  componentDidMount () {
    const url = `${process.env.REACT_APP_BACKEND}/categories`
    console.log('fetching from url', url)

    fetch(url, { headers: { Authorization: 'whatever-you-want' } }).then(res => res.json()).then(data => {
      this.setState({ backend: data })
    })
  }

  render () {
    const { categories } = this.state.backend
    console.log(categories)

    return (
      <div className='App'>
        {categories && categories.map(category => <div>{category.name}</div>)}
      </div>
    )
  }
}

export default App
