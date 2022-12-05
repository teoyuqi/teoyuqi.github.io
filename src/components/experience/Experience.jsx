import React from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'

import tiktokLogo from '../../assets/companyLogos/tiktok.png'
import dsoLogo from '../../assets/companyLogos/dso.png'
import nusLogo from '../../assets/companyLogos/nus.png'
import './experience.css'

const Experience = () => {
  var keyCount = 0;
  const jobs = [
    { id: 1,
      image: tiktokLogo,
      role: "Frontend Engineer Intern",
      company: "TikTok (Global e-Commerce)",
      date: "Jan 2023 - Present",
      description: []
    },
    { id: 2,
      image: dsoLogo,
      role: "Embedded Software Engineer Intern",
      company: "DSO National Laboratories",
      date: "May 2022 – Jul 2022",
      description: [{ id: 1, 
                      text: "Deploy custom deep-learning model on Avnet UltraZed-EG with Vitis-AI APIs (Python/C++)"},
                    { id: 2, 
                      text: "Provided in-depth documentation to assist software team in future adoption of Vitis-AI"},
                    { id: 3, 
                      text: "Utilised Bash scripting to simplify workflow"}]
    },
    { id: 3,
      image: nusLogo,
      role: "Student Volunteer (OTH4419 AI Primer Course)",
      company: "National Unversity of Singapore",
      date: "May 2022 – Jun 2022",
      description: [{ id: 1, 
                      text: "Assisted in setting weekly quizzes for the OTH4199 AI Primer Course"},
                    { id: 2, 
                      text: "Tested student's understnding of Search, Minimax and Hill-Climbing algorithms"},
                    { id: 3, 
                      text: "Beneficiary: Autism Resource Centre (Singapore)"}]
    },
    { id: 4,
      image: tiktokLogo,
      role: "TikTok Youth Camp 2022 Participant",
      company: "TikTok | Youth Camp",
      date: "May 2022",
      description: [{ id: 1, 
                      text: "Attended 10-day course on web and Android application development"},
                    { id: 2, 
                      text: "Created a Hangman web application using React framework as part of course deliverables"}]
    },
  ];

  const getJobDescription = (descriptions) => {
    if (descriptions.length == 0) {
      return(<div></div>);
    } else {
      return(descriptions.map((description) => {
        return(
          <div className='experience__description' key={description["id"]}>
            <div className='experience__bullet'>
              <AiOutlineCheckCircle/>
            </div>
            <small>{description["text"]}</small>
          </div>);
      }))
    }
  }

  const getJobCard = (job) => {
    return (
      <article className='experience__job' key={job["id"]}>
        <div className='experience__logo'>
          <img src={job["image"]} alt={`${job["company"]} logo`}/>
        </div>

        <div className='experience__content'>
          <h3 className='experience__title'>{job["role"]}</h3>

          <div className='experience__subtitle'>
            <h4 className='experience__company'>{job["company"]}</h4>
            <h4 className='experience__date'>{job["date"]}</h4>
          </div>

          <div  className='experience__descriptions'>
            {getJobDescription(job["description"])}
          </div>
        </div>
      </article>
    )
  }

  return (
    <section id='experience'>
      <h2>Work and Volunteer experience</h2>
      <div className='container experience__container'>
        <div className='experience__jobs'>
          {jobs.map(getJobCard)}
        </div>

        <div className='experience__skills'>
          <article className='experience__skill'>
            <h5>Fluent in</h5>
            {/* Logos */}
          </article>

          <article className='experience__skill'>
            <h5>Also used</h5>
            {/* Logos */}
          </article>
        </div>
      </div>
    </section>
  )
}

export default Experience