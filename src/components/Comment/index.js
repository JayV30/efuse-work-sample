import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './comment.module.sass';
import UserImage from 'components/UserImage';
import CommentHeader from './CommentHeader';
import CommentEditableContent from './CommentEditableContent';
import CommentControls from './CommentControls';

const Comment = ({ comment, postId }) => {
  const [displayEditor, setDisplayEditor] = useState(false);

  const toggleEditor = () => setDisplayEditor(!displayEditor);

  return (
    <div className={styles.comment}>
      <div className={styles.userIcon}>
        <UserImage size="40px" filename={comment.user.thumbImg} />
      </div>
      <div className={styles.commentWrapper}>
        <CommentHeader comment={comment} />
        <CommentEditableContent isEditing={displayEditor} toggleEditor={toggleEditor} comment={comment} postId={postId} />
        <CommentControls comment={comment} toggleEditor={toggleEditor} postId={postId} />
      </div>
    </div>
  );
};

Comment.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired
};

export default Comment;