import React from 'react';
import PropTypes from 'prop-types';
import CommentInput from 'components/Comments/CommentInput';
import styles from './comment.module.sass';

const CommentEditableContent = ({ isEditing, toggleEditor, comment, postId }) => {
  return isEditing ? (
    <CommentInput postId={postId} commentId={comment.id} initialValue={comment.content} submitCallback={toggleEditor} />
  ) : (
    <p className={styles.commentContent}>{comment.content}</p>
  )
};

CommentEditableContent.propTypes = {
  isEditing: PropTypes.bool,
  toggleEditor: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
};

export default CommentEditableContent;