import React, { Component } from 'react'
import './App.css'

class App extends Component {
  state = {
    gif: ''
  }

  fetchGif = async () => {
    console.log('im here')
    const response = await fetch(`/api/cat`)
    const encodedGif = await response.json()
    const gif = encodedGif.gif
    this.setState({ gif })
  }

  render() {
    return (
      <div className="App">
        {this.state.gif && <img src={this.state.gif} alt="Cat" />}
        <button type="button" onClick={this.fetchGif}>
          Show me some cats!
        </button>
      </div>
    )
  }
}

export default App
