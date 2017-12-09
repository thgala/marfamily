import React, { Component } from 'react'
import {
  Link,
} from 'react-router-dom'

import './footer.css'

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer__wrap'>
          <div className='footer__logo footer__logo--marfajournal' />
          <div className='footer__logo footer__logo--marfoffice' />
          <div className='footer__logo footer__logo--marfamily' />
        </div>
      </div>
    )
  }
}

export default Footer
