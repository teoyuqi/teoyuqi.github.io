import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { FaTelegram } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

import './contact.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w384ppm', 'template_xg2u0cc', form.current, 'V6NhCHpBJLlJQHJDc');

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h2>Contact Me</h2>
      
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>tyuqi@u.nus.edu</h5>
            <a href='mailto:tyuqi@u.nus.edu' target='_blank' rel="noreferrer">Send a message</a>
          </article>

          <article className='contact__option'>
            <AiOutlineWhatsApp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+65 8522 9381</h5>
            <a href='https://api.whatsapp.com/send?phone=6585229381' target='_blank' rel="noreferrer">Send a message</a>
          </article>

          <article className='contact__option'>
            <FaTelegram className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>@teoyuqi</h5>
            <a href='https://t.me/teoyuqi' target='_blank' rel="noreferrer">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input tpe='text' name='name' placeholder='Your Full Name' required/>
          <input tpe='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Type Your Message Here' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact