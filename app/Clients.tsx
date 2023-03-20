import React from 'react'
import classes from './../styles/Clients.module.scss'

function Clients() {
  return (
    <>
        <div className={classes.clients}>
            <ClientsLogoDisplay />
            <div className={classes.clients__middle_section}>
                <hr className='bg-black h-1 mb-10'></hr>
                <p className={classes.clients__middle_section__header}>Our Esteemed Clients</p>

                <br></br>

                <p className={classes.clients__middle_section__body}>Elevate your business with smart strategies and innovative visual solutions to create a cohesive brand experience perfectly tailored to your unique clientele. Our attention to detail, modern aesthetic and clear execution bring your brand and vision to life.</p>
                <hr className='bg-black h-1 mt-10'></hr>
            </div>
            <ClientsLogoDisplay />
        </div>
    </>
  )
}

function ClientsLogoDisplay() {
    return (
      <>
          <div className={classes.clients}>
                  Who are we?
          </div>
      </>
    )
  }

export default Clients