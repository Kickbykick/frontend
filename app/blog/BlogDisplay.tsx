import React from 'react'
import classes from './../../styles/blog/Blog.module.scss';

export default function BlogDisplay() {
    return (
      <>
        <div className={classes.blog__individual_blog}>
          <p className={classes.blog__individual_blog__text}>
            Web Page
          </p>
        </div>
      </>
    )
  }