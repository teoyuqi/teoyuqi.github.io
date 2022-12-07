import React from 'react'
import { FaUserGraduate } from 'react-icons/fa'
import { GiBullseye } from 'react-icons/gi'
import { TbCertificate } from 'react-icons/tb'

import cat from '../../assets/cat.jpg'
import './about-me.css'

const AboutMe = (props) => {

  const { observeElement } = props;

  return (
    <section id='about-me'>
      <h2>About me</h2>
      <div className='container about__container'>
        <div className='about__image'>
          <img src={cat} alt='huihui'/>
        </div>

        <div className='about__content' ref={observeElement}>
          <div className='about__cards'>
            <article className='about__card'>
              <TbCertificate className='about__icon'/>
              <h5>Computer Science</h5>
              <small>National University of Singapore (NUS)</small>
            </article>

              <article className='about__card'>
              <FaUserGraduate className='about__icon about__icon-grad'/>
              <h5>Est. graduation</h5>
              <small>2024 Summer</small>
            </article>

            <article className='about__card'>
              <GiBullseye className='about__icon'/>
              <h5>Focus Area</h5>
              <small>Software Engineering</small>
            </article>
          </div>

          <p> Welcome to my site! I am Yu Qi, a Computer Science undergraduate 
              from the National University of Singapore (NUS) with a passion for
              building great software. 
              <br></br><br></br>
              I am open to full-time software engineering opportunities from
              Summer 2024 onwards. <b>DM me and let's work!</b></p>

          <a href="#contact" className='btn btn-primary'>DM me!</a>
        </div>

      </div>
    </section>
  )
}

export default AboutMe
