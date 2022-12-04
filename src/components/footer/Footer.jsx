import React from 'react'

import FooterSocials from './FooterSocials'
import './footer.css'

const Footer = () => {
  return (
    <footer>
        <ul className='permalinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Me</a></li>
            <li><a href="#">Experience</a></li>
            <li><a href="#">Contact Me</a></li>
        </ul>

        <div className='footer__socials'>
            <FooterSocials/>
        </div>
    </footer>
  )
}

export default Footer;