import React, { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { currentUser } from 'recoil/atoms';
import { newPost } from 'recoil/selectors';
import { FaPhotoVideo } from 'react-icons/fa';
import styles from './newPost.module.sass';
import UserImage from 'components/UserImage';

const NewPost = () => {
  const user = useRecoilValue(currentUser);
  const createNewPost = useSetRecoilState(newPost);
  const [inputText, setInputText] = useState('');

  const handleInputTextChange = (e) => setInputText(e.target.value);
  const handleSubmit = () => {
    createNewPost(inputText);
    setInputText('');
  }

  return (
    <div className={styles.newPost}>
      <div className={styles.postFormWrapper}>
        <div className={styles.userIcon}>
          <UserImage size="50px" filename={user.thumbImg} />
        </div>
        <div className={styles.postForm}>
          <textarea placeholder="What is on your mind?" value={inputText} onChange={handleInputTextChange}></textarea>
        </div>
      </div>
      <div className={styles.postButtons}>
        <button className={styles.attachmentButton}><FaPhotoVideo size={14} /> Photo/Video</button>
        <button className={styles.submitButton} disabled={inputText.length < 1} onClick={handleSubmit}>Post It</button>
      </div>
    </div>
  );
};

// no props

export default NewPost;