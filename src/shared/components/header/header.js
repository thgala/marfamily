import React, { Component } from 'react'
import {
  Link,
} from 'react-router-dom'
import Waypoint from 'react-waypoint'

import './header.css'

import MiniGallery from '../miniGallery'
import Menu from '../menu'

class Header extends Component {

  constructor(props) {
    super(props)

    this.state = {
      offset: 0,
    }
    this.SCROLL_LIMIT = 85
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(event) {
    const offset = document.body.scrollTop || document.documentElement.scrollTop

    if(offset < this.SCROLL_LIMIT){
      this.setState({
        offset,
      })
    } else {
      this.setState({
        offset: this.SCROLL_LIMIT,
      })
    }
  }

  render() {
    const { offset } = this.state
    const headerMenuStyles = {
      transform: `translate3d(0, -${offset}px, 0)`
    }

    return (
      <div className='header'>
        <MiniGallery />
        <div className='header__menu' style={headerMenuStyles}>
          <div className='header__menuWrap'>
            <Menu />
          </div>
        </div>
      </div>
    )
  }
}

export default Header
