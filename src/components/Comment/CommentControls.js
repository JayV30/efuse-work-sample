import React from 'react';
import PropTypes from 'prop-types';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { currentUser } from 'recoil/atoms';
import { commentLikes, deleteComment } from 'recoil/selectors';
import styles from './comment.module.sass';
import LikeButton from 'components/LikeButton';

const CommentControls = ({ comment, toggleEditor, postId }) => {
  const user = useRecoilValue(currentUser);
  const toggleCommentLike = useSetRecoilState(commentLikes);
  const handleCommentDelete = useSetRecoilState(deleteComment);

  return (
    <p className={styles.commentControls}>
      <span className={`${styles.controlItem} ${comment.likes.length < 1 ? styles.inactive : ''}`}>{`${comment.likes.length} Like${comment.likes.length === 1 ? '' : 's'}`}</span>
      <LikeButton active={comment.likes.includes(user.id)} handleToggle={() => toggleCommentLike({ postId: postId, commentId: comment.id })} style={{fontSize: '0.8rem'}} />
      {
        comment.user.id === user.id ? (
          <React.Fragment>
            <span className={`${styles.controlItem} ${styles.editButton}`} onClick={toggleEditor} tabIndex={0}><FaPencilAlt size={12} /> Edit</span>
            <span className={`${styles.controlItem} ${styles.deleteButton}`} onClick={() => handleCommentDelete({ commentId: comment.id, postId: postId })} tabIndex={0}><FaTrash size={12} /> Delete</span>
          </React.Fragment>
        ) : null
      }
    </p>
  );
};

CommentControls.propTypes = {
  comment: PropTypes.object.isRequired,
  toggleEditor: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
};

export default CommentControls;