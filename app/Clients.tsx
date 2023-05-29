"use client"

import React from 'react'
import classes from './../styles/Clients.module.scss'
import { clients, client_1, client_2, client_3 } from "../public";
import dynamic from "next/dynamic"
import Image from 'next/image'

const MediaQuery = dynamic(() => import("react-responsive"), {
  ssr: false
})

function Clients() {
  return (
    <>
      <MediaQuery minWidth={960}>
        <section className={classes.clientsheroWrapper}>
          <div className={classes.clients}>
            <ClientsLogoDisplay />
            <EsteemedClients />
            <ClientsLogoDisplay2 />
          </div>
        </section>
      </MediaQuery>

      <MediaQuery maxWidth={960}>
        <EsteemedClients />
        <section className={classes.clientsheroWrapper}>
          <div className={classes.clients}>
            <ClientsLogoDisplay />
            <div className={classes.vl}></div>
            <ClientsLogoDisplay2 />
          </div>
        </section>
      </MediaQuery>
    </>
  )
}

function EsteemedClients() {
  return (
    <div className={classes.clients__middle_section}>
      <div className={classes.clients__middle_section__imagecontainer}>
        <Image src={clients} alt="Who are we image" className={classes.clients__middle_section__image} loading="lazy"/>

        <div className={classes.clients__middle_section__tinted}></div>

        <div className={classes.clients__middle_section__textonimage}>
          <hr className={`${classes.clients__middle_section__horizontalline}`}></hr>
          <h1 className={classes.clients__middle_section__header}>Our Esteemed Clients</h1>
          <p className={classes.clients__middle_section__body}>With our dedication to quality, innovation, and customer satisfaction, we strive to build long-lasting relationships with each and every one of our esteemed clients. Your trust in our expertise and commitment to excellence is what drives us to continuously improve and deliver outstanding results.</p>
          <hr className={`${classes.clients__middle_section__horizontalline}`}></hr>
        </div>
      </div>
    </div>
  )
}

function ClientsLogoDisplay() {
  return (
    <section className={classes.client_carousel}>
      <Image src={client_1} alt="Client Logo" className={classes.clients__middle_section__icons} loading="lazy"/>
      <hr className='bg-black h-0.5 mt-10 w-full'></hr>
      <Image src={client_3} alt="Client Logo" className={classes.clients__middle_section__icons} loading="lazy"/>
      <hr className='bg-black h-0.5 mt-10 w-full'></hr>
      <Image src={client_2} alt="Client Logo" className={classes.clients__middle_section__icons} loading="lazy"/>
    </section>
  )
}

function ClientsLogoDisplay2() {
  return (
    <section className={classes.client_carousel}>
      <Image src={client_1} alt="Client Logo" className={classes.clients__middle_section__icons} loading="lazy"/>
      <hr className='bg-black h-0.5 mt-10 w-full'></hr>
      <Image src={client_3} alt="Client Logo" className={classes.clients__middle_section__icons} loading="lazy"/>
      <hr className='bg-black h-0.5 mt-10 w-full'></hr>
      <Image src={client_2} alt="Client Logo" className={classes.clients__middle_section__icons} loading="lazy"/>
    </section>
  )
}

export default Clients