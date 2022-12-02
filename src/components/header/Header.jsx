import React from 'react'

import CallToAction from './CallToAction'
import HeaderSocials from './HeaderSocials'
import formalPortrait from '../../assets/formal-portrait.jfif'
import './header.css'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Yu Qi</h1>
        <h5 className='text-light'>Computer Science Undergraduate | NUS </h5>
        <CallToAction/>
        <div className='formal-portrait'>
          <img src={formalPortrait} alt="me" />
        </div>
        <HeaderSocials/>
      </div>
    </header>
  )
}

export default Header