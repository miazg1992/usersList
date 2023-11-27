import React from 'react';
import { users } from 'data/users';
import UsersListItem from '../UsersListItem/UsersListItem';
import styles from './UsersList.module.scss';

const UsersList = () => (
  <div className={styles.container}>
    <ul>
      {users.map((userData) => (
        <UsersListItem userData={userData} />
      ))}
    </ul>
  </div>
);

export default UsersList;
