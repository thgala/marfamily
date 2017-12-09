import React from 'react'

import 'normalize.css'
import './appWrap.css'

const AppWrap = props => {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default AppWrap
