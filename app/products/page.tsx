import React from 'react';
import classes from './../../styles/products/Products.module.scss';
import Image from 'next/image';
import { product_1, product_2, product_3, product_4, product_5, product_6, product_7, product_8, product_9, product_10 } from "./../../public";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Product | iDDt Studios',
  description:
    'iDDt Studios is a Development and Design Company.',
  keywords:"growth agency, web design, design, web development, calgary, web design calgary",
};

function Product() {
  return (
    <>
      <section className={classes.products}>
        <div className={classes.products__container}>
          <h1 className={classes.products__header}>
            Our Work.
          </h1>

          <p className={classes.products__body}>
            Elevate your business with smart strategies and innovative visual solutions to create a cohesive brand experience perfectly tailored to your unique clientele. Our attention to detail, modern aesthetic and clear execution bring your brand and vision to life.
          </p>
        </div>

        <hr className='bg-black h-1 mt-10'></hr>
      </section>

      <section className={classes.products__section}>
        <IndividualProduct image={product_1.src}/>
        <IndividualProduct image={product_2.src}/>
        <IndividualProduct image={product_3.src}/>
        <IndividualProduct image={product_4.src}/>
        <IndividualProduct image={product_5.src}/>
        <IndividualProduct image={product_6.src}/>
        <IndividualProduct image={product_7.src}/>
        <IndividualProduct image={product_8.src}/>
        <IndividualProduct image={product_9.src}/>
        <IndividualProduct image={product_10.src}/>
      </section>

      <div className='h-10'></div>
    </>
  )
}

function IndividualProduct(props: any) {
  return (
    <>
      <div className={classes.products__individual_products}>
        <img 
          src={props.image} 
          alt="Product Image" 
          className={classes.products__section__image}
        />
      </div>
    </>
  )
}

export default Product