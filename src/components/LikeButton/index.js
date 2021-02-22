import React from 'react';
import PropTypes from 'prop-types';
import { FaHeart } from 'react-icons/fa';
import styles from './likeButton.module.sass';

const LikeButton = ({ active, handleToggle, ...rest }) => {
  return (
    <span className={`${styles.likeButton} ${active ? styles.likeButton__active : ''}`} onClick={handleToggle} tabIndex={0} {...rest} >
      <FaHeart />
      Like
    </span>
  );
};

LikeButton.propTypes = {
  active: PropTypes.bool,
  handleToggle: PropTypes.func.isRequired,
};

export default LikeButton;