import React from 'react'
import classes from './../styles/About.module.scss'

function About() {
  return (
    <>
        <div className={classes.whoarewe}>
            <p className={classes.whoarewe__text}>
                Who are we?
            </p>
        </div>

        <div className={classes.whoarewe__content}>
            <p >
                Who are we?
            </p>
        </div>


        <div className={classes.whatwedo}>
            <p className={classes.whatwedo__text}>
                Who are we?
            </p>
        </div>
    </>
  )
}

export default About