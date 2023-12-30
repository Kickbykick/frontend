"use client"

import React from 'react'
import classes from './../../styles/expertise/Expertise.module.scss';
import { expertise_hero, expertise_2, expertise_3, expertise_4, expertise_5 } from "../../public";
import Image from 'next/image'
import dynamic from "next/dynamic"

const MediaQuery = dynamic(() => import("react-responsive"), {
  ssr: false
})

export default function ExpertisePage() {
  return (
    <>
      <section className={classes.heroWrapper}>
        <div className={classes.imageWrapper}>
          <Image 
            src={expertise_hero}
            alt="Expertise Hero"
            // layout="fill"
            // objectFit="cover"
            // objectPosition="center"
            fill
            // style={{objectFit:"cover"}}
            className={classes.imageWrapper}
            // width={1080} 
            // height={1920}
            priority
          />
        </div>

        <div className={classes.tinted}></div>

        <div className={classes.container}>
          <div className={classes.container__text}>
            <h1 className={classes.expertise_pitch__header}>Fix You Sessions</h1>
            <p className={classes.expertise_pitch__body}>
              At our modern design and development company, our ethos is rooted in the pursuit of excellence, innovation, and user-centricity. We believe in pushing boundaries, embracing emerging technologies, and continuously evolving our craft to deliver transformative digital experiences. With a deep understanding of our clients&apos; goals and their target audience, we strive to create intuitive, visually stunning, and functionally robust solutions that not only meet but exceed expectations.
            </p>
          </div>
        </div>
      </section>

      <IndividualProductExpertise
        name="Website Design"
        body="High focus on innovation, user-centric design, and seamless functionality. iDDt takes a modern approach to create captivating and intuitive designs."
        image={expertise_2}
      />

      <MediaQuery maxWidth={960}
      >
        <IndividualProductExpertise
          name="Mobile App Dev"
          body="By leveraging the latest technologies and industry best practices, iDDT crafts bespoke solutions tailored to each client's unique needs, whether it's a startup looking to disrupt the market or an established enterprise seeking digital transformation."
          image={expertise_3}
        />
      </MediaQuery>
      <MediaQuery minWidth={960}
      >
        <IndividualProductExpertiseReverse
          name="Mobile App Dev"
          body="By leveraging the latest technologies and industry best practices, iDDT crafts bespoke solutions tailored to each client's unique needs, whether it's a startup looking to disrupt the market or an established enterprise seeking digital transformation."
          image={expertise_3}
        />
      </MediaQuery>

      <IndividualProductExpertise
        name="E-commerce"
        body="We are a leading development company that specializes in providing comprehensive ecommerce services, empowering businesses to establish and optimize their online presence for seamless and profitable transactions."
        image={expertise_4}
        alternateColor={true}
      />

      <MediaQuery maxWidth={960}
      >
        <IndividualProductExpertise
          name={"Ad Campaigns"}
          body="We seamlessly integrate captivating visuals, engaging storytelling, and data-driven insights to deliver targeted and impactful campaigns that resonate with audiences across multiple digital platforms."
          image={expertise_5}
          alternateColor={true}
        />
      </MediaQuery>
      <MediaQuery minWidth={960}
      >
        <IndividualProductExpertiseReverse
          name={"Ad Campaigns"}
          body="We seamlessly integrate captivating visuals, engaging storytelling, and data-driven insights to deliver targeted and impactful campaigns that resonate with audiences across multiple digital platforms."
          image={expertise_5}
          alternateColor={true}
        />
      </MediaQuery>

      <div className={`${classes.end} h-20`}></div>
    </>

  )
}

function IndividualProductExpertise(props: any) {
  return (
    <>
      <div className={props.alternateColor ? classes.section_alt : classes.section}>
        <div className={classes.section__text}>
          <h1 className={props.alternateColor ? classes.section_alt__header : classes.section__header}>{props.name}</h1>
          <p className={props.alternateColor ? classes.section_alt__body : classes.section__body}>{props.body}</p>
        </div>
        <div className={classes.section__image}>
          <Image 
            src={props.image}
            className={classes.section__imageclass}
            alt="Expertise Hero"
            loading="lazy"
            // priority
          />
        </div>
      </div>
    </>
  )
}

function IndividualProductExpertiseReverse(props: any) {
  return (
    <>
      <div className={props.alternateColor ? classes.section_alt : classes.section}>
        <div className={classes.section__image}>
          <Image 
            src={props.image}
            alt="Expertise Hero"
            className={classes.section__imageclass}
            loading="lazy"
          />
        </div>
        <div className={classes.section__text}>
          <h1 className={props.alternateColor ? classes.section_alt__header : classes.section__header}>{props.name}</h1>
          <p className={props.alternateColor ? classes.section_alt__body : classes.section__body}>{props.body}</p>
        </div>
      </div>
    </>
  )
}