import React, { Component } from 'react'

class Arrows extends Component {
  render () {
    return (
      <div>
        <button onClick={this.props.onPrev} className="slide-arrow left">-</button>
        <button onClick={this.props.onNext} className="slide-arrow right">+</button>
      </div>
    )
  }
}

export default Arrows;