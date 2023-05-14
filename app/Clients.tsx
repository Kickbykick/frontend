"use client"

import React from 'react'
import classes from './../styles/Clients.module.scss'
import { clients, apple, client_1, client_2, client_3 } from "../public";
import dynamic from "next/dynamic"

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
        <img src={clients.src} alt="Who are we image" className={classes.clients__middle_section__image}/>

        <div className={classes.clients__middle_section__tinted}></div>

        <div className={classes.clients__middle_section__textonimage}>
          <hr className={`${classes.clients__middle_section__horizontalline}`}></hr>
          <h1 className={classes.clients__middle_section__header}>Our Esteemed Clients</h1>
          <p className={classes.clients__middle_section__body}>Elevate your business with smart strategies and innovative visual solutions to create a cohesive brand experience perfectly tailored to your unique clientele. Our attention to detail, modern aesthetic and clear execution bring your brand and vision to life.</p>
          <hr className={`${classes.clients__middle_section__horizontalline}`}></hr>
        </div>
      </div>
    </div>
  )
}

function ClientsLogoDisplay() {
  return (
    <section className={classes.client_carousel}>
      <img src={client_1.src} alt="Client Logo" className={classes.clients__middle_section__icons}/>
      <hr className='bg-black h-0.5 mt-10 w-full'></hr>
      <img src={client_3.src} alt="Client Logo" className={classes.clients__middle_section__icons}/>
      <hr className='bg-black h-0.5 mt-10 w-full'></hr>
      <img src={client_1.src} alt="Client Logo" className={classes.clients__middle_section__icons}/>
    </section>
  )
}

function ClientsLogoDisplay2() {
  return (
    <section className={classes.client_carousel}>
      <img src={client_1.src} alt="Client Logo" className={classes.clients__middle_section__icons}/>
      <hr className='bg-black h-0.5 mt-10 w-full'></hr>
      <img src={client_3.src} alt="Client Logo" className={classes.clients__middle_section__icons}/>
      <hr className='bg-black h-0.5 mt-10 w-full'></hr>
      <img src={client_2.src} alt="Client Logo" className={classes.clients__middle_section__icons}/>
    </section>
  )
}

export default Clients