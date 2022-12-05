import React from 'react'
import { FaUserGraduate, FaTools } from 'react-icons/fa'

import cat from '../../assets/cat.jpg'
import './about-me.css'

const AboutMe = () => {
  return (
    <section id='about-me'>
      <h2>About me</h2>
      <div className='container about__container'>
        <div className='about__image'>
          <img src={cat} alt='huihui'/>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaUserGraduate className='about__icon'/>
              <h5>B.Comp in Computer Science</h5>
              <small>National University of Singapore (NUS)</small>
            </article>

              <article className='about__card'>
              <FaUserGraduate className='about__icon'/>
              <h5>Estimated graduation</h5>
              <small>2024 Summer</small>
            </article>

            <article className='about__card'>
              <FaTools className='about__icon'/>
              <h5>B.Comp in Computer Science</h5>
              <small>ETA: 2024 Summer</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi cupiditate perferendis ab repudiandae ad similique explicabo iusto doloremque esse, corporis deleniti facere quod nisi possimus quam eligendi. Impedit, reiciendis unde.</p>

            <a href="#contact" className='btn btn-primary'>Let's talk!</a>
        </div>

      </div>
    </section>
  )
}

export default AboutMe
