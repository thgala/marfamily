import React, { Component } from 'react'

import LayoutContainer from '../../shared/components/layout/container'
import IssueCover from '../../shared/components/issueCover'

class HomePage extends Component {
  render() {
    return (
      <div>
        <LayoutContainer>
          <IssueCover number={1} />
          <IssueCover number={2} />
          <IssueCover number={3} />
          <IssueCover number={4} />
          <IssueCover number={5} />
        </LayoutContainer>
      </div>
    )
  }
}

export default HomePage