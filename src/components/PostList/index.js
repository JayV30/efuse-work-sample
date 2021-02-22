import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useRecoilValue } from 'recoil';
import { postsWithComments } from 'recoil/selectors';
import styles from './postList.module.sass';
import Post from 'components/Post';

const PostList = () => {
  const posts = useRecoilValue(postsWithComments);

  return (
    <AnimatePresence initial={false}>
      {
        posts.map(post => {
          return (
            <motion.div
              key={post.id}
              className={styles.postItemAnimationWrapper}
              initial={{ opacity: 0, y: -200 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              layout="position"
            >
              <Post post={post} />
            </motion.div>
          )
        })
      }
    </AnimatePresence>
  );
};

// no props

export default PostList;