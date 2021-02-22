import React from 'react';
import PropTypes from 'prop-types';
import styles from './post.module.sass';

const PostStats = ({ post }) => {
  return (
    <p className={styles.postStats}>
      <span className={post.likes.length < 1 ? styles.inactive : ''}>{`${post.likes.length} Like${post.likes.length === 1 ? '' : 's'}`}</span>
      <span className={post.likes.length < 1 && post.comments.length < 1 ? styles.inactive : ''}>&bull;</span>
      <span className={post.comments.length < 1 ? styles.inactive : ''}>{`${post.comments.length} Comment${post.comments.length === 1 ? '' : 's'}`}</span>
    </p>
  );
};

PostStats.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostStats;