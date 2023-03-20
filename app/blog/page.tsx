import React from 'react'
import BlogDisplay from './BlogDisplay';
import classes from './../../styles/blog/Blog.module.scss';

function Blog() {
  return (
    <div className={classes.blog}>
      <div className={classes.blog__mainheadertext}>
        Blog
      </div>

      <hr className={classes.blog__horizontal}/>

      <div className={classes.blog__section}>
        <BlogDisplay />
        <BlogDisplay />
        <BlogDisplay />
        <BlogDisplay />
      </div>
    </div>
  )
}

export default Blog