import React from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './commentList.module.sass';
import Comment from 'components/Comment';

const CommentList = ({ postId, comments }) => {
  return (
    <div className={styles.commentListWrapper}>
      <AnimatePresence initial={false}>
        {
          comments.map(comment => {
            return (
              <motion.div
                key={comment.id}
                className={styles.commentItemAnimationWrapper}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                layout="position"
              >
                <Comment comment={comment} postId={postId} />
              </motion.div>
            )
          })
        }
      </AnimatePresence>
    </div>
  );
};

CommentList.propTypes = {
  postId: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired
};

export default CommentList;