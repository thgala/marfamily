import React from 'react'
import {
  Link,
} from 'react-router-dom'

const CustomLink = ({ to, external, children, className, }) => {
  return external ? (
    <a href={to} target='_blank' className={className}>
      {children}
    </a>
  ) : (
    <Link to={to} className={className}>
      {children}
    </Link>
  )
}

export default CustomLink
