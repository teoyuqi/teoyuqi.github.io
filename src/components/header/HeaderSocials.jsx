import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

const HeaderSocials = () => {
  const LINKEDIN_PROFILE = "https://www.linkedin.com/in/teo-yu-qi/"
  const GITHUB_PROFILE = "https://github.com/teoyuqi/"
  return (
    <div className='header__socials'>
        <a href={LINKEDIN_PROFILE} target="_blank" rel="noreferrer">
            <BsLinkedin/>
        </a>
        <a href={GITHUB_PROFILE} target="_blank" rel="noreferrer">
            <BsGithub/>
        </a>
    </div>
  )
}

export default HeaderSocials