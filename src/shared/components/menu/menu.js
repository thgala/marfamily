import React, { Component } from 'react'
import Link from './../link'

import './menu.css'
import { MENU_LIST } from './data'

class Menu extends Component {
  render() {
    return (
      <div className='menu'>
        {MENU_LIST.map((menuItem, i) => {
          return (
            <Link
              external={menuItem.external}
              to={menuItem.link}
              key={i}
              className='menu__item'>
              {menuItem.title}
            </Link>
          )
        })}
      </div>
    )
  }
}

export default Menu
