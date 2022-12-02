import React, { Fragment } from 'react'

import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'

const App = () => {
  return (
    <Fragment>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Contact/>
    </Fragment>
  )
}

export default App