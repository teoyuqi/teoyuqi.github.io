import React, { useEffect } from 'react'

import { logoIcons } from './Logos'
import './skills.css'

const Skills = () => {
  const callback = (entries) => {
      // Loop through all elements that are now in window.
      entries.forEach((entry) => {
        entry.target.classList.toggle('hide', !entry.isIntersecting);
        entry.target.classList.toggle('show', entry.isIntersecting);
    })};
  const observer = new IntersectionObserver(callback);

  // Generates block element contaning icon and its name.
  const getLogoElement = (tool) => {
    return (
        <div className='skills__icon' key={tool}>
          <img src={logoIcons[tool]["icon"]} alt={tool} className={`skills__icon-${tool}`}/>
          <div>{logoIcons[tool]["name"]}</div>
        </div>
    )
  };

  // Block elements of tools I'm fluent in.
  const toolsImFluentIn = [ "python", "java", "javascript", "html", "css", "react", "git" ].map(getLogoElement);
 
  // Block elements of tools I've used before.
  const toolsIveAlsoUsed = [ "c", "cpp", "bash", "rails", "ruby", "firebase", "arduino", "xilinx" ].map(getLogoElement);

  return (
    <section id='skills'>
      <h2>Skills</h2>
      <div className='container skills__container'>

          <div>
            <p>Here are some of the programming languages and frameworks I have used in the past. Hit me up if I have the skillsets you are looking for!</p>

            <a href="#contact" className='btn btn-primary'  ref={(element) => observer.observe(element)}>Hit Me Up!</a>
          </div>

          <div className='skills__cards'>
            <article className='skills__card'  ref={(element) => observer.observe(element)}>
              <div className='skills__title'>Fluent in</div>
              <div className='skills__icons'>
                {toolsImFluentIn}
              </div>
            </article>

            <article className='skills__card' ref={(element) => observer.observe(element)}>
              <div className='skills__title'>Also used</div>
              <div className='skills__icons'>
                {toolsIveAlsoUsed}
              </div>
            </article>
          </div>

      </div>
    </section>
  )
}

export default Skills
