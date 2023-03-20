import React from 'react'
import BlogDisplay from '../BlogDisplay'
import classes from './../../../styles/blog/Blog.module.scss';

type PageProps = {
    params: {
        blogName: string;
    }
}

function BlogName({params: {blogName}}: PageProps) {
  return (
    <div className={classes.blog}>
      <p className={classes.blog__mainheadertext}>
        Ai vs the world?
      </p>

      <hr className={classes.blog__horizontal}/>

      <div className={classes.blog__section}>
        <BlogDisplay />
        <BlogDisplay />
        <BlogDisplay />
      </div>
    </div>
  )
}

export default BlogName