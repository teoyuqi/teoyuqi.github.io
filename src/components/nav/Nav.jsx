import React, { useState } from 'react'
import { AiOutlineMessage } from 'react-icons/ai'
import { BiHomeCircle } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { GiGearHammer } from 'react-icons/gi'

import './nav.css'


const Nav = () => {

  const [ activeNavButton, setActiveNavButton ] = useState("#");

  // Checks if a button is the active button. 
  // If it is active, return "active", else, return "".
  const isActive = (buttonHref) => {
    if (buttonHref === activeNavButton) {
      return 'active';
    } else {
      return '';
    }
  }

  return (
    <nav>
      <a 
        href='#header' 
        className={isActive('#header')}
        onClick={() => setActiveNavButton('#header')}>
          <BiHomeCircle/>
      </a>

      <a 
        href='#about-me'
        className={isActive('#about-me')}
        onClick={() => setActiveNavButton('#about-me')}>
          <CgProfile/>
        </a>

      <a href='#experience'        
        className={isActive('#experience')}
        onClick={() => setActiveNavButton('#experience')}>
          <GiGearHammer/>
        </a>

      <a href='#contact'
        className={isActive('#contact')}
        onClick={() => setActiveNavButton('#contact')}>
        <AiOutlineMessage/>
      </a>

    </nav>
  )
}

export default Nav