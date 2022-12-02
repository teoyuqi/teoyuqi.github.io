import React from 'react'

import CallToAction from './CallToAction'
import './header.css'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Yu Qi</h1>
        <h5 className='text-light'>Software Engineer</h5>
        <CallToAction></CallToAction>
      </div>
    </header>
  )
}

export default Header