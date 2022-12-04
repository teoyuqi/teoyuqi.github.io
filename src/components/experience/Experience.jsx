import React from 'react'
import './experience.css'

const Experience = () => {
  return (
    <section id='experience'>
      <h2>Work and Volunteer experience</h2>
      <div className='container experience__container'>
        <article className='experience__item'>
          {/* TikTok Logo */}
          <h5>COMPANY NAME - role</h5>
          <small>START DATE - END DATE</small>
        </article>

        <article className='experience__item'>
          {/* DSO Logo */}
          <h5>COMPANY NAME - role</h5>
          <small>START DATE - END DATE</small>
          <ul>
            <li>Tasks handled</li>
            <li>Tasks handled</li>
          </ul>
        </article>

        <article className='experience__item'>
          {/* NUS Logo */}
          <h5>COMPANY NAME - role</h5>
          <small>START DATE - END DATE</small>
          <ul>
            <li>Tasks handled</li>
            <li>Tasks handled</li>
          </ul>
        </article>

        <div className='container skills__container'>
          <article className='skill__item'>
            <h5>Fluent in</h5>
            {/* Logos */}
          </article>

          <article className='skill__item'>
            <h5>Also used</h5>
            {/* Logos */}
          </article>
        </div>

        <a href="#contact" className='btn btn-primary'>Let's talk!</a>
      </div>
    </section>
  )
}

export default Experience