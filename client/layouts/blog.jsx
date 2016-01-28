import React from 'react';

const BlogLayout = ({content}) => (
  <div>
    <div className="navigation">
    <a href="/">Home</a>
    </div>
    <h1> My Blog </h1>
    {content}
  </div>
);

export default BlogLayout;
