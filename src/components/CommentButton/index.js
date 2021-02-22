import React from 'react';
import PropTypes from 'prop-types';
import { FaCommentDots } from 'react-icons/fa';
import styles from './commentButton.module.sass';

const CommentButton = ({ handleToggle }) => {
  return (
    <span className={`${styles.commentButton}`} onClick={handleToggle} tabIndex={0}>
      <FaCommentDots />
      Comment
    </span>
  );
};

CommentButton.propTypes = {
  handleToggle: PropTypes.func.isRequired,
};

export default CommentButton;