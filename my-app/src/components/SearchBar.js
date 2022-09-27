import React, { Component } from 'react'
import names from './names'

export class SearchBar extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        names: names
    }
  }
  handleChange = (event) => {
    const inputText = event.target.value.toLowerCase()
    console.log(inputText)
    const filteredNames = names.filter(names => {
      return names.toLowerCase().includes(inputText)
    })
    this.setState({
      names: filteredNames
    })
  }

  render() {
    return (
      <div>
        <h1>Name Search</h1>
        <p>matching names found: {this.state.names.length}</p>
        <form>
          <input
            onChange={(event) => this.handleChange(event)}
            type="text"
            placeholder='Search name'
            >
            
            </input>
        </form>
        <div style={{margin: 'auto'}}>
          {this.state.names.map(names => {
            return <p key={names} >{names}</p>
          })}
          we will render names
        </div>
      </div>
    )
  }
}

export default SearchBar
