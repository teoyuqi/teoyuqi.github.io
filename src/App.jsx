import React, { Fragment } from 'react'

import About from './components/about-me/AboutMe'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Skills from './components/skills/Skills'

const App = () => {
  return (
    <Fragment>
      <Header/>
      <Nav/>
      <About/>
      <Skills/>
      <Experience/>
      <Contact/>
      <Footer/>
    </Fragment>
  )
}

export default App