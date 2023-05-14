import React from 'react'
import classes from "./../styles/Footer.module.scss";

function Footer() {
  return (
    <div className={classes.footer}>
        <p className={classes.footer__content}>
            Copyright &copy; {new Date().getFullYear()} iDDt Studios. All Rights Reserved.
        </p>
    </div>
  )
}

export default Footer