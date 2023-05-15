import React from 'react'
import classes from './../../styles/blog/Blog.module.scss';
import { blog } from "../../public";
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Blog | iDDt Studios',
  description:
    'iDDt Studios is a Development and Design Company.',
  keywords:"growth agency, web design, design, web development, calgary, web design calgary",
};

function Blog() {
  return (
    <>
      <section className={classes.blog}>
        <div className={classes.blog__imagecontainer}>
          <Image src={blog} alt="Blog Image, we would create web design blogs that you would love" className={classes.blog__image}/>
          <div className={classes.blog__tinted}></div>
          <h1 className={classes.blog__mainheadertext}>
            Blogs.
          </h1>
        </div> 
      </section>
      <section className={classes.blog__section}>
        <p className={classes.blog__section__text}>
          No current blogs 🌚🌚
        </p>
      </section>
    </>
  )
}

export default Blog