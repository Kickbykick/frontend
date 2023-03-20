"use client"

import React, { useState } from 'react';
import classes from './../../styles/contact/Contact.module.scss';

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [formSuccess, setFormSuccess] = useState(false)
  const [formSuccessMessage, setFormSuccessMessage] = useState("")

  const handleInput = () => {
    // const fieldName = e.target.name;
    // const fieldValue = e.target.value;

    // setFormData((prevState) => ({
    //   ...prevState,
    //   [fieldName]: fieldValue
    // }));
  }

  return (
    <div className={classes.contact}>
      <div className={classes.contact__findustext}>
        Find Us
      </div>

      <div className={classes.contact__subtopic}>
        <div className="w-80">
          <p className={`${classes.contact__subtopic__header}`}>
            Availability
          </p>
          <p className={`${classes.contact__subtopic__body}`}>
            Elevate your business with smart strategies and innovative visual solutions to create a cohesive brand experience perfectly tailored to your unique clientele. Our attention to detail, modern aesthetic and clear execution bring your brand and vision to life.
          </p>
        </div>

        <div>
          <p className={`${classes.contact__subtopic__header} text-right`}>
            Say Hello
          </p>
          <p className={`${classes.contact__subtopic__body} text-right`}>
            Elevate your business with smart strategies and innovative visual solutions to create a cohesive brand experience perfectly tailored to your unique clientele. Our attention to detail, modern aesthetic and clear execution bring your brand and vision to life.
          </p>
        </div>
      </div>

      <div className={classes.contact__contactform}>
        <p className={`${classes.contact__subtopic__header} text-center`}>
          Quick Details
        </p>


        <form>
          <div className='flex flex-row md:flex-row justify-between mb-7'>
            <div className='flex flex-col'>
              <label className={classes.contact__contactform__text}>Your Name</label>
              <input type="text" name="name" onChange={handleInput} value={formData.name} />
            </div>
            
            <div className='flex flex-col'>
              <label className={classes.contact__contactform__text}>Your E-mail</label>
              <input type="text" name="name" onChange={handleInput} value={formData.name} />
            </div>
          </div>

          <div className='flex flex-col mb-7'>
            <label className={classes.contact__contactform__text}>What can we help with?</label>

            <div>
              <input className={classes.contact__contactform__checkbox} type="checkbox"/>
              <input className={classes.contact__contactform__checkbox} type="checkbox"/>
            </div>
          </div>

          <div className='flex flex-col mb-7'>
            <label className={classes.contact__contactform__text}>Do you have a  specific budget?</label>

            <div>
              <input type="checkbox"/>
              <input type="checkbox"/>
              <input type="checkbox"/>
              <input type="checkbox"/>
            </div>
            
          </div>

          <div className='flex flex-col mb-7'>
            <label className={classes.contact__contactform__text}>What’s your timeline?</label>
            <div className='gap-2 flex flex-rows'>
              <input type="checkbox"/>
              <input type="checkbox"/>
            </div>
          </div>

          <div className='flex flex-col mb-7'>
            <label className={classes.contact__contactform__text}>Tell us a bit about your project</label>
            <textarea name="About your project" cols={40} rows={10} className={classes.contact__contactform__textarea}></textarea>
          </div>

          <button className={classes.contact__contactform__button}>
            SUMBIT
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact