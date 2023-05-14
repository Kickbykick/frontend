import React from 'react'
import classes from './../../styles/blog/Blog.module.scss';
import { blog } from "../../public";

function Blog() {
  return (
    <>
      <section className={classes.blog}>
        <div className={classes.blog__imagecontainer}>
          <img src={blog.src} alt="Who are we image" className={classes.blog__image}/>
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