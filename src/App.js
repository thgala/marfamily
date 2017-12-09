import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

// Components
import AppWrap from './shared/components/appWrap'
import Header from './shared/components/header'
import Footer from './shared/components/footer'

// Pages
import HomePage from './pages/home'

class App extends Component {
  render() {
    return (
      <Router>
        <AppWrap>
          <Header />
          <Route exact path="/" component={HomePage} />
          <Footer />
        </AppWrap>
      </Router>
    )
  }
}

export default App
// <Route path="/about" component={About} />