import React from 'react'
import classes from "./../styles/Hero.module.scss";
import { hero, who_are_we, right_arrow } from "../public";
import Image from 'next/image';
import Clients from './Clients';
import Link from 'next/link'

function Hero() {
  return (
    <>
      <section className={classes.heroWrapper}>
        <div className={classes.imageWrapper}>
          {/* <Image 
            src={hero}
            alt="Expertise Hero"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          /> */}
        </div>

        <div className={classes.container}>
          <Link href="/contact">
            <p className={classes.letschat}>
              Let&apos;s chat!
            </p>
          </Link>
          <div className={classes.hero_container}>
            <h1 className={`${classes.hero_header}`}>FROM</h1>
            <h1 className={`${classes.hero_header__second}`}>IDEATION</h1>
            <div className={classes.hero_header__row}>
              <h1 className={`${classes.rotate_text}`}>TO</h1>
              <h1 className={`${classes.hero_header_life} ${classes.lifemarginleft}`}>LIFE.</h1>
            </div>
            <h1 className={`${classes.hero_header__alt}`}>TO LIFE.</h1>
          </div>
        </div>
      </section>

      <section  className={classes.whoarewe_container}>
          <div className={classes.whoarewe_container__left}>
            <div>
              <h1 className={`${classes.whoarewe_container__header} mb-3`}>
                Who are we?
              </h1>
              <p className={classes.whoarewe_container__body}>Elevate your business with smart strategies and innovative visual solutions to create a cohesive brand experience perfectly tailored to your unique clientele. Our attention to detail, modern aesthetic and clear execution bring your brand and vision to life.</p>
            </div>

            <Link href="/contact">
              <p className={classes.whoarewe_container__letschat}>Let&apos;s chat!</p>
            </Link>
          </div>

          <Image 
            src={who_are_we}
            alt="Who are we image"
            className={classes.whoarewe_container__image}
          />
      </section>

      {/* Services */}
      <ServicesSection />

      {/* Clients */}
      <Clients />
    </>
  )
}

function ServicesSection() {
  return (
    <>
      <section className={classes.servicesheroWrapper}>
        <div className={classes.services}>
          <h1 className={classes.services__header}>
            Services.
          </h1>
          <div className={classes.services__item_list}>
            <div className={classes.services__item_list__container}>
              <ServiceItems 
                header="Design" 
                bottomborder={true} 
                body="High focus on innovation, user-centric design, and seamless functionality..."/>
              <ServiceItems 
                header="Mobile App Development & Design" 
                bottomborder={true} 
                body="whether it's a startup looking to disrupt the market or an established enterprise seeking digital..."/>
              <ServiceItems 
                header="E-commerce" 
                bottomborder={true} 
                body="We are a leading development company that specializes in providing comprehensive..."/>
              <ServiceItems 
                header="Graphic Ad Campaigns" 
                bottomborder={false} 
                body="We seamlessly integrate captivating visuals, engaging storytelling, and data-driven insights..."/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function ServiceItems(props: any) {
  return (
    <Link href="/expertise">
      <div className={`${classes.serviceitem} ${props.bottomborder ? classes.itemborder : {}}` }>
        <div className={classes.serviceitem__top}>
          <h3 className={classes.serviceitem__header}>
            {props.header}
          </h3>
          <img src={right_arrow.src} alt="Who are we image" width="30" height="30" className={classes.serviceitem__arrow}/>
        </div>

        <div className={classes.serviceitem__body}>
          {props.body}
        </div>

        <img src={right_arrow.src} alt={`${"Arrow for " + props.header}`} width="30" height="30" className={classes.serviceitem__arrowdrop}/>
      </div>
    </Link>
  )
}

export default Hero