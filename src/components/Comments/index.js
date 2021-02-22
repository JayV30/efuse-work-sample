import React from 'react';
import PropTypes from 'prop-types';
import styles from './comments.module.sass';
import CommentList from 'components/Comments/CommentList';
import CommentForm from 'components/Comments/CommentForm';

const Comments = ({ postId, comments }) => {
  return (
    <div className={styles.commentsWrapper}>
      <CommentForm postId={postId} style={{ marginBottom: comments.length > 0 ? '1rem' : '0' }}/>
      <CommentList postId={postId} comments={comments} />
    </div>
  );
};

Comments.propTypes = {
  postId: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired
};

export default Comments;