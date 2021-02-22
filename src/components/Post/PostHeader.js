import React from 'react';
import PropTypes from 'prop-types';
import { DateTime } from "luxon";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoEllipsisHorizontalSharp } from 'react-icons/io5';
import styles from './post.module.sass';
import { timeDiffText } from 'helpers';
import UserImage from 'components/UserImage';

const PostHeader = ({ post }) => {
  const timeOfPost = DateTime.now().diff(DateTime.fromISO(post.createdAt), ['years', 'months', 'days', 'hours', 'minutes']);
  const timeString = timeDiffText(timeOfPost);

  return (
    <div className={styles.postHeader}>
      <div className={styles.userIcon}>
        <UserImage size="56px" filename={post.user.thumbImg} />
      </div>
      <div className={styles.userInfo}>
        <p className={styles.userName}>{post.user.name}</p>
        { post.user.location && <p className={styles.userLoc}><FaMapMarkerAlt size={10} />{`${post.user.location.state}, ${post.user.location.country}`}</p> }
        <p className={styles.postTimeDiff}>{timeString}</p>
      </div>
      <div className={styles.optionsIcon}>
        <IoEllipsisHorizontalSharp size={22} />
      </div>
    </div>
  );
};

PostHeader.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostHeader;