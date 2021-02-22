import React from 'react';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react';
import { hideAll } from 'tippy.js';
import { useRecoilState } from 'recoil';
import { currentUser } from 'recoil/atoms';
import 'tippy.js/dist/tippy.css';
import styles from './userSelect.module.sass';
import { FaUserCircle } from 'react-icons/fa';
import { demoUsers } from 'helpers';

const UserSelect = props => {
  const [user, setUser] = useRecoilState(currentUser);

  const handleUserSelectClick = (user) =>  {
    setUser(user);
    hideAll();
  }

  return (
    <Tippy
      trigger="click"
      interactive={true}
      content={<div className={styles.tooltipContent}><p className={styles.title}>Select a User</p>{ demoUsers.map(u => <p className={`${styles.tooltipSelector} ${user.id === u.id ? styles.tooltipSelector__active : ''}`} key={u.id} onClick={() => handleUserSelectClick(u)}>{u.name}</p>)}</div>}
    >
      <div className={styles.userSelect} tabIndex={0}>
        <FaUserCircle size={30}/>
      </div>
    </Tippy>
  );
};

UserSelect.propTypes = {

};

export default UserSelect;