import React, { Fragment } from 'react'

import About from './components/about-me/AboutMe'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Skills from './components/skills/Skills'

const App = () => {

  // Callback function to be triggered when an element enters the window.
  const callback = (entries) => {
    // Loop through all elements that are now in window.
    entries.forEach((entry) => {
      entry.target.classList.toggle('hide', !entry.isIntersecting);
      entry.target.classList.toggle('show', entry.isIntersecting);
  })};

  // Observer that checks if element is in window.
  const observer = new IntersectionObserver(callback);

  return (
    <Fragment>
      <Header observeElement={(element) => observer.observe(element)}/>
      <Nav/>
      <About observeElement={(element) => observer.observe(element)}/>
      <Skills observeElement={(element) => observer.observe(element)}/>
      <Experience observeElement={(element) => observer.observe(element)}/>
      <Contact observeElement={(element) => observer.observe(element)}/>
      <Footer observeElement={(element) => observer.observe(element)}/>
    </Fragment>
  )
}

export default App