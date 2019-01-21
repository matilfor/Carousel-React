import React, { Component } from 'react'

class Images extends Component {
  render () {
    return (
      <div className="image-slide" style={ {backgroundImage: `url(${this.props.image})`} }></div>
    )
  }
}
export default Images;