import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSetRecoilState } from 'recoil';
import { newComment, updateComment } from 'recoil/selectors';
import { IoMdSend } from 'react-icons/io';
import styles from './commentInput.module.sass';

const CommentInput = ({ postId, commentId, initialValue, submitCallback }) => {
  const [commentVal, setCommentVal] = useState(initialValue);
  const sendNewComment = useSetRecoilState(newComment);
  const sendCommentUpdate = useSetRecoilState(updateComment);

  const handleChange = (e) => setCommentVal(e.target.value);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSubmit();
  }

  const handleSubmit = () => {
    if (commentVal.length < 1) return;
    commentId ? sendCommentUpdate({ postId: postId, commentId: commentId, content: commentVal }) : sendNewComment({ postId: postId, content: commentVal });
    setCommentVal('');
    if (submitCallback) submitCallback();
  }

  return (
    <div className={styles.commentInput}>
      <input type="text" value={commentVal} onChange={handleChange} onKeyPress={handleKeyPress} placeholder="Add a comment" />
      { commentVal.length > 0 && <IoMdSend size={22} onClick={handleSubmit} tabIndex={0} />}
    </div>
  );
};

CommentInput.propTypes = {
  postId: PropTypes.string.isRequired,
  commentId: PropTypes.string,
  initialValue: PropTypes.string,
  submitCallback: PropTypes.func,
};

CommentInput.defaultProps = {
  initialValue: ''
}

export default CommentInput;