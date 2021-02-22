import React from 'react';
import PropTypes from 'prop-types';
import { useRecoilValue } from 'recoil';
import { currentUser } from 'recoil/atoms';
import { motion } from 'framer-motion';
import styles from './commentForm.module.sass';
import UserImage from 'components/UserImage';
import CommentInput from 'components/Comments/CommentInput';

const CommentForm = ({ postId, ...rest }) => {
  const user = useRecoilValue(currentUser);

  return (
    <motion.div className={styles.commentForm} layout="position" {...rest} >
      <div className={styles.userIcon}>
        <UserImage size="40px" filename={user.thumbImg} />
      </div>
      <div className={styles.commentInputWrapper}>
        <CommentInput postId={postId} />
      </div>
    </motion.div>
  );
};

CommentForm.propTypes = {
  postId: PropTypes.string.isRequired,
};

export default CommentForm;