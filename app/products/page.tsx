import React from 'react';
import classes from './../../styles/products/Products.module.scss';

function Product() {
  return (
    <>
      <div className={classes.products}>
        <div className={classes.products__header}>
          The journey starts and ends here.
        </div>

        <hr className={classes.products__horizonal}/>

        <hr className={`${classes.products__horizonal} w-full`}/>

        <div>
        </div>

        <div className={classes.products__body}>
          Elevate your business with smart strategies and innovative visual solutions to create a cohesive brand experience perfectly tailored to your unique clientele. Our attention to detail, modern aesthetic and clear execution bring your brand and vision to life.
        </div>

        <div className={classes.products__section}>
          <IndividualProduct />
          <IndividualProduct />
          <IndividualProduct />
          <IndividualProduct />
        </div>
      </div>
    </>
  )
}

function IndividualProduct() {
  return (
    <>
      <div className={classes.products__individual_products}>
        <p className={classes.products__individual_products__text}>
          Web Page
        </p>
      </div>
    </>
  )
}

export default Product