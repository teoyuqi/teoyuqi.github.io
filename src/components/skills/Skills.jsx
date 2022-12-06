import React from 'react'

import './skills.css'

const Skills = () => {
  return (
    <section id='skills'>
      <h2>Skills</h2>
      <div className='container skills__container'>

          <div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi cupiditate perferendis ab repudiandae ad similique explicabo iusto doloremque esse, corporis deleniti facere quod nisi possimus quam eligendi. Impedit, reiciendis unde.</p>

            <a href="#contact" className='btn btn-primary'>Let's talk!</a>
          </div>

          <div className='skills__cards'>
            <article className='skills__card'>
              <h5>Fluent in</h5>
              {/* Logos */}
            </article>

            <article className='skills__card'>
              <h5>Also used</h5>
              {/* Logos */}
            </article>
          </div>

      </div>
    </section>
  )
}

export default Skills
