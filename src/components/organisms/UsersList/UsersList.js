import React from 'react';
import styled from 'styled-components';

import { users } from 'data/users';
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

const UsersList = () => (
  <Wrapper>
    <ul>
      {users.map((userData, index) => (
        <UsersListItem userData={userData} index={index} key={userData.name} />
      ))}
    </ul>
  </Wrapper>
);

export default UsersList;
