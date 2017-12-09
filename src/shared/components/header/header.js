import React, { Component } from 'react'
import {
  Link,
} from 'react-router-dom'

import './header.css'

import MiniGallery from '../miniGallery'
import Menu from '../menu'

class Header extends Component {

  constructor(props) {
    super(props)

    this.state = {
      pressed: false,
    }
    this.SCROLL_LIMIT = 100
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(event) {
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
    const { pressed } = this.state

    if (scrollTop > this.SCROLL_LIMIT) {
      this.setState({
        pressed: true,
      })
    } else if(pressed){
      this.setState({
        pressed: false,
      })    
    }
  }

  render() {
    const { pressed } = this.state
    const pressedClass = pressed ? `pressed` : ``

    return (
      <div className={`header ${pressedClass}`}>
        <MiniGallery />
        <div className='header__menu'>
          <div className='header__menuWrap'>
            <Menu />
          </div>
        </div>
      </div>
    )
  }
}

export default Header
