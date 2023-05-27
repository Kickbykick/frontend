import React from 'react';
import classes from './../../styles/products/Products.module.scss';
import Image from 'next/image';
import { product_1, product_2, product_3, product_4, product_5, product_6, product_7, product_8, product_9, product_10 } from "./../../public";
import { Metadata } from 'next';
import Link from 'next/link';

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
        <IndividualProduct image={product_1} href={"https://aworanapp.com/#/"}/>
        <IndividualProduct image={product_2} href={"https://apps.apple.com/app/id1551892149"}/>
        <IndividualProduct image={product_3}/>
        <IndividualProduct image={product_4}/>
        <IndividualProduct image={product_5}/>
        <IndividualProduct image={product_6}/>
        <IndividualProduct image={product_7}/>
        <IndividualProduct image={product_8}/>
        <IndividualProduct image={product_9}/>
        <IndividualProduct image={product_10}/>
      </section>

      <div className='h-10'></div>
    </>
  )
}

function IndividualProduct(props: any) {
  return (
    <>
      <Link href= {props.href ? props.href : "/products"} className={classes.products__individual_products} >
        <Image 
          src={props.image} 
          alt="Product Image" 
          className={classes.products__section__image}
          priority
        />
      </Link>
    </>
  )
}

export default Product