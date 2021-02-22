import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { currentUser } from 'recoil/atoms';
import { postLikes } from 'recoil/selectors';
import styles from './post.module.sass';
import LikeButton from 'components/LikeButton';
import CommentButton from 'components/CommentButton';
import Comments from 'components/Comments';

const PostFooter = ( { post }) => {
  const user = useRecoilValue(currentUser);
  const togglePostLike = useSetRecoilState(postLikes);
  const [commentsVisible, setCommentsVisible] = useState(post.comments.length > 0);

  const toggleCommentVisibility = () => setCommentsVisible(!commentsVisible);

  return (
    <div className={styles.postFooter}>
      <div className={styles.controls}>
        <LikeButton active={post.likes.includes(user.id)} handleToggle={() => togglePostLike(post.id)} />
        <CommentButton handleToggle={toggleCommentVisibility} />
      </div>
      <AnimatePresence initial={false}>
        {
          commentsVisible ? (
            <motion.div
              key="comments-visible"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              layout
            >
              <Comments postId={post.id} comments={post.comments} />
            </motion.div>
          ) : null
        }
      </AnimatePresence>
    </div>
  );
};

PostFooter.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostFooter;