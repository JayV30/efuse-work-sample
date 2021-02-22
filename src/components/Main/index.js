import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { currentUser } from 'recoil/atoms';
import axios from 'axios';
import styles from './main.module.sass';
import NewPost from 'components/NewPost';
import PostList from 'components/PostList';
import UserSelect from 'components/UserSelect';

const Main = () => {
  const setCurrentUser = useSetRecoilState(currentUser);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`)
          .then(res => {
            const isoCodeArr = res.data.principalSubdivisionCode.split('-');
            const stateAbbr = isoCodeArr[isoCodeArr.length - 1];
            setCurrentUser(prevUserObj => {
              return {
                ...prevUserObj,
                location: {
                  state: stateAbbr,
                  country: res.data.countryCode === 'US' ? 'USA' : res.data.countryCode
                }
              }
            })
          })
      });
    }
  }, [setCurrentUser]);


  return (
    <div className={styles.main}>
      <UserSelect />
      <div className={styles.postListContainer}>
        <NewPost />
        <PostList />
      </div>
    </div>
  );
};

// no props

export default Main;