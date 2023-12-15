import React, { useState } from 'react';
import styled from 'styled-components';

import { users as usersData } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
console.log('i');

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 80%;
  max-width: 500px;
  padding: 40px 30px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.8);
`;

const UsersList = (props) => {
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState(usersData);

  // const getUsers = () => {
  //   setUsers(usersData);
  // };

  const changeTitle = () => {
    setCounter(counter + 1);
  };

  const deleteUsers = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  return (
    <Wrapper>
      <h1>
        {counter}
        {props.title}
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
  );
};

export default UsersList;
