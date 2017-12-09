import React, { Component } from 'react'

import './issueCover.css'

class IssueCover extends Component {
  render() {
    const { number } = this.props

    return (
      <div className={`issueCover n${number}`}>
        <div className='issueCover__bg' />
      </div>
    )
  }
}

IssueCover.defaultProps = {
  number: '',
}

export default IssueCover
