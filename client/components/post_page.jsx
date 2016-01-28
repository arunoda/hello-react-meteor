import React from 'react';

const PostPage = ({post}) => (
  <div>
    <a href={FlowRouter.path('/')}>Back</a>
    <h3>{post.title}</h3>
    <p>{post.content}</p>
  </div>
);

export default PostPage;
