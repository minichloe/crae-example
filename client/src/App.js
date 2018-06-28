import React, { Component } from 'react'
import './App.css'

class App extends Component {
  state = {
    cow: ''
  }

  componentDidMount() {
    this.fetchCow()
  }

  fetchCow = async () => {
    const response = await fetch(`/api/cow`)
    const initialCow = await response.json()
    const cow = initialCow.moo
    this.setState({ cow })
  }

  customCow = evt => {
    const text = evt.target.value
    const response = await fetch(`/api/cow/${text}`)
    const custom = await response.json()
    const cow = custom.moo
    this.setState({ cow })
  }

  render() {
    return (
      <div className="App">
        <h3>Text Cow. Moo</h3>
        <code>{this.state.cow}</code>
        <button type="button" onClick={this.customCow}>Show me some cats!</button>
      </div>
    )
  }
}

export default App
