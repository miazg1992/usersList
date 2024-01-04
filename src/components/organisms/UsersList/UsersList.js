import React, { useState } from 'react';

import { users as usersData } from 'data/users';
import { Button } from 'components/atoms/Button/Button';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import FormField from 'components/molecules/FormField/FormField';
import { Wrapper } from './UsersList.styles';
import Form from '../Form/Form.js';

// Zabezpieczenie przed literówkami
// const formFields = {
//   name: 'NAME',
//   attendance: 'ATTENDANCE',
//   average: 'AVERAGE',
// };

const UsersList = ({ counter, title, changeTitle, users, deleteUsers }) => {
  return (
    <>
      <Wrapper>
        <h1>
          {counter}
          {title}
        </h1>
        <button onClick={changeTitle}>Change Title</button>
        <ul>
          {users.map((userData, index) => (
            <UsersListItem
              userData={userData}
              index={index}
              key={userData.name}
              deleteUsers={deleteUsers}
            />
          ))}
        </ul>
      </Wrapper>
    </>
  );
};

export default UsersList;
