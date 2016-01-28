import React from 'react';

const PostList = ({posts}) => (
  <div>
    This is the post list
    <ul>
      {posts.map(({_id, title}) => (
        <li key={_id}>
          <a href={FlowRouter.path('post', {_id})}>{title}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default PostList;
