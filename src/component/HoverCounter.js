import React, { Component } from 'react'
import WithCounter from './WithCounter'

class HoverCounter extends Component {

  render() {
    const {count,incrementCounter} = this.props
    return (
      <div>
        <h2 onMouseOver={incrementCounter}>Hover On Me {count} Times</h2>
      </div>
    )
  }
}

export default WithCounter(HoverCounter,20)
