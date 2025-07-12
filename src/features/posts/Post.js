import React from 'react';

const Post = ({ post }) => {
  return (
    <div className="post">
      <h3>{post.title}</h3>
      <p>Subreddit: r/{post.subreddit}</p>
      <p>Author: u/{post.author}</p>
      {post.thumbnail && post.thumbnail.startsWith('http') && (
        <img src={post.thumbnail} alt="thumbnail" />
      )}
    </div>
  );
};

export default Post;
