import React from 'react'

import FooterSocials from './FooterSocials'
import './footer.css'

const Footer = () => {
  return (
    <footer>
        <ul className='permalinks'>
            <li><a href="#header">Home</a></li>
            <li><a href="#about-me">About Me</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact Me</a></li>
        </ul>

        <div className='footer__socials'>
            <FooterSocials/>
        </div>
    </footer>
  )
}

export default Footer;