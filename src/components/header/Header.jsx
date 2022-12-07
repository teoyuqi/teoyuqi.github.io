import React from 'react'

import CallToAction from './CallToAction'
import HeaderSocials from './HeaderSocials'
import formalPortrait from '../../assets/formal-portrait.jfif'
import './header.css'

const Header = (props) => {
  const { observeElement } = props; 

  return (
    <header id='header'>
      <div className='container header__container'>
        <div className='header__content' ref={observeElement}>
          <h5>Hello I'm</h5>
          <h1>YU QI</h1>
          <h5 className='text-light'>Software Engineer, Computer Science Undergraduate </h5>
          <CallToAction/>
          <div className='formal-portrait'>
            <img src={formalPortrait} alt="me" />
          </div>
        </div>
        <HeaderSocials/>
      </div>
    </header>
  )
}

export default Header