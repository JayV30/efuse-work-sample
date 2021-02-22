import React from 'react';
import PropTypes from 'prop-types';
import styles from './post.module.sass';
import PostHeader from './PostHeader';
import PostStats from './PostStats';
import PostFooter from './PostFooter';

const Post = ({ post }) => {
  return (
    <div className={styles.post}>
      <PostHeader post={post} />
      <div className={styles.postBody}>
        <p className={styles.postContent}>{post.content}</p>
        <PostStats post={post} />
      </div>
      <PostFooter post={post} />
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;