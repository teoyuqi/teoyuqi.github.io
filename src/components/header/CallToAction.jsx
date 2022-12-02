import React from 'react'

import resume from '../../assets/Teo_Yu_Qi resume.pdf'

const CallToAction = () => {
  return (
    <div className='call-to-action'>
        <a href={resume} download className='btn'>Download resume</a>
        <a href='#contact' className='btn btn-primary'>Find me</a>
    </div>
  )
}

export default CallToAction