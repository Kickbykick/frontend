"use client"

import React, { useState } from 'react';
import classes from './../../styles/contact/Contact.module.scss';
// import 'dotenv/config';
// import { EmailParams } from "mailersend";
// import { MailerSendObj, SentFrom, Recipients, EmailParamsObj }  from './../../lib/mailersend'
import { sendEmail } from "../../lib/email";
import { useForm } from 'react-hook-form';

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  let successMessage = false;
  const [disableButton, setDisableButton] = useState(false);

  const onSubmit = async (data: any) => {
    console.log(data);

    const response:Response = await fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify(data),
    });
    setDisableButton(true);
    setTimeout(() => setDisableButton(false), 5000);

    if(response.status == 200) {
      reset();
      successMessage = true;
    } else if(response.status == 400) {
      successMessage = false;
      const jsonResponse = await response.json();
      console.log(jsonResponse.message);
    }
  };


  return (
    <div className={classes.contact}>
      <h1 className={classes.contact__findustext}>
        Find Us
      </h1>

      <div className={classes.contact__subtopic}>
        <div className={classes.contact__subtopic__headerwidth}>
          <h3 className={`${classes.contact__subtopic__header}`}>
            Availability
          </h3>
          <p className={`${classes.contact__subtopic__body}`}>
          From the captivating city of Calgary, Alberta, we are grateful for the opportunity to collaborate with clients from around the world.          </p>
        </div>

        <div className={classes.contact__subtopic__headerwidth}>
          <h3 className={`${classes.contact__subtopic__sayhelloheader}`}>
            Say Hello
          </h3>
          <p className={`${classes.contact__subtopic__sayhellobody}`}>
            Business@iddtstudios.com
          </p>
          <p className={`${classes.contact__subtopic__sayhellobody}`}>
            Instagram | Linkedin | Facebook
          </p>
        </div>
      </div>

      <div className={classes.contact__contactform}>
        <h3 className={`${classes.quickdetailheadertext} text-center`}>
          Quick Details
        </h3>

        <form className={classes.contact__contactform__inner} onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.contact__contactform__innerpadding}>
          
            <div className={`${classes.contact__contactform__rowinput}`}>
              <div className={`${classes.contact__contactform__rowinputitem}`}>
                <p className={`${classes.contact__contactform__text} mb-7`}>Your Name</p>
                <input className={classes.contact__contactform__inputline} 
                  style={errors.name ? {
                    borderBottom: "1px solid #D90000"
                  } : {
                    borderBottom: "1px solid #000000"
                  }}
                  type="text" 
                  // name="name" 
                  // onChange={handleInput} 
                  // value={formData.name}
                  {...register("name", {
                    required: "Please enter a name",
                  })}
                />
              </div>
              <div className={`${classes.contact__contactform__rowinputitemright}`}>
                <p className={`${classes.contact__contactform__text} mb-7`}>Your E-mail</p>
                <input className={classes.contact__contactform__inputline}
                  style={errors.email ? {
                    borderBottom: "1px solid #D90000"
                  } : {
                    borderBottom: "1px solid #000000"
                  }}
                  type="text" 
                  {...register("email", {
                    required: "Please enter your email",
                    pattern: {
                      value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                      message: "Please enter a valid email"
                    }
                  })}
                  // name="email" 
                  // onChange={handleInput} 
                  // value={formData.email}
                />
              </div>
            </div>

            <ContactCheckboxList
              title="What can we help with?"
              text1="Website"
              text2="Mobile App"
              text3="Brand Design"
              text4="Other"
              register={register}
              class="Service"
            />

            <ContactCheckboxList
              title="Do you have a specific budget?"
              text1="2500"
              text2="5000"
              text3="15000"
              text4="Custom"
              extra="Budget"
              register={register}
              class="Budget"
            />

            <ContactCheckboxList
              title="What’s your timeline?"
              text1="1 month"
              text2="2 month"
              text3="3 month"
              text4="Custom"
              register={register}
              class="Timeline"
            />

            <div className='flex flex-col mb-7'>
              <label className={`${classes.contact__contactform__text} mb-7`}>Tell us a bit about your project</label>
              <textarea className={classes.contact__contactform__textarea} 
                {...register("about", {
                  required: "Please tell us about your project",
                })}
                ></textarea>
            </div>

            <button 
              type="submit"
              className={classes.contact__contactform__button}
              disabled={disableButton}
            >
              SUBMIT
            </button>
          </div>

          {(errors.name || errors.email || errors.Service || errors.Budget || errors.Timeline || errors.about) 
            && 
            <div className={classes.errorMsg}>
              <p className={classes.errorMsg__text}>{"Error on one or more fields. Please check and try again."}</p>
            </div>
          }

          {disableButton
            &&
            <div className={classes.successMsg}>
              <p className={classes.successMsg__text}>{"Thank you for getting in touch!"}</p>
            </div>
          }

          <div className='h-10'></div>
        </form>
        
      </div>
    </div>
  )
}

function ContactCheckboxList(props: any) {
  return (
    <div className={`${classes.contact__contactform__checkboxlistcontainer}`}>
      <p className={classes.contact__contactform__text}>{props.title}</p>

      <div className={`${classes.contact__contactform__checkboxlist}`}>
        <div className={classes.contact__contactform__checkboxrow}>
          <input className={classes.contact__contactform__checkbox} type="checkbox" 
            {...props.register(props.class, {
              required: "Please select at-least one skill"
            })}
            value={props.text1}
          />
          <p className={classes.contact__contactform__checkboxtext}>{props.text1}</p>
        </div>
        <div className={classes.contact__contactform__checkboxrow}>
          <input className={classes.contact__contactform__checkbox} type="checkbox"
            {...props.register(props.class)}
            value={props.text2}
          />
          <p className={classes.contact__contactform__checkboxtext}>{props.text2}</p>
        </div>
        <div className={classes.contact__contactform__checkboxrow}>
          <input className={classes.contact__contactform__checkbox} type="checkbox"
            {...props.register(props.class)}
            value={props.text3}
          />
          <p className={classes.contact__contactform__checkboxtext}>{props.text3}</p>
        </div>
        <div className={classes.contact__contactform__checkboxrow}>
          <input className={classes.contact__contactform__checkbox} type="checkbox"
            {...props.register(props.class)}
            value={props.extra ? (props.text4+ " " + props.extra) : props.text4}
          />
          <p className={classes.contact__contactform__checkboxtext}>{props.text4}</p>
        </div>
      </div>
    </div>
  )
}

// function YourNameAndEmail(props: any) {
//   return (
//     <div className={`${classes.contact__contactform__rowinput} flex flex-row md:flex-row mb-7 justify-between`}>
//       <div className={`${classes.contact__contactform__rowinputitem} flex flex-col`}>
//         <label className={`${classes.contact__contactform__text} mb-7`}>Your Name</label>
//         <input type="text" name="name" onChange={handleInput} value={formData.name} />
//       </div>
//       {/* <div className='w-10'></div> */}
//       <div className={`${classes.contact__contactform__rowinputitem} flex flex-col text-right`}>
//         <label className={`${classes.contact__contactform__text} mb-7`}>Your E-mail</label>
//         <input className={classes.contact__contactform__inputline} type="text" name="name" onChange={handleInput} value={formData.name} />
//       </div>
//     </div>
//   )
// }

export default Contact