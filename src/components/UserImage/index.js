import React from 'react';
import PropTypes from 'prop-types';
import styles from './userImage.module.sass';

const UserImage = ({ size, filename }) => {
  return (
    <div className={styles.userImage} style={{ height: size, width: size }}>
      <img src={filename ? `${process.env.PUBLIC_URL}/userMedia/${filename}` : `${process.env.PUBLIC_URL}/userMedia/default.png`} alt="profile" />
    </div>
  );
};

UserImage.propTypes = {
  size: PropTypes.string,
  filename: PropTypes.string,
};

UserImage.defaultProps = {
  size: '30px'
}

export default UserImage;