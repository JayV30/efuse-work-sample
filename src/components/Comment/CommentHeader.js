import React from 'react';
import PropTypes from 'prop-types';
import { DateTime } from "luxon";
import styles from './comment.module.sass';
import { timeDiffText } from 'helpers';

const CommentHeader = ({ comment }) => {
  const timeOfPost = DateTime.now().diff(DateTime.fromISO(comment.createdAt), ['years', 'months', 'days', 'hours', 'minutes']);
  const timeString = timeDiffText(timeOfPost);

  return (
    <div className={styles.commentHeader}>
      <div className={styles.userInfo}>
        <p className={styles.userName}>{comment.user.name}</p>
        <p className={styles.userRole}>{comment.user.role}</p>
      </div>
      <p className={styles.postTimeDiff}>{timeString}</p>
    </div>
  );
};

CommentHeader.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default CommentHeader;