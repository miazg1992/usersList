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

class UsersList extends React.Component {
  state = {
    listTitle: `User's list`,
    counter: 0,
    users,
  };

  changeTitle = () => {
    console.log('zmieniam');
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  deleteUsers = (name) => {
    console.log(name);
    const filteredUsers = this.state.users.filter((user) => user.name !== name);
    console.log(filteredUsers);
    this.setState({ users: filteredUsers });
  };
  render() {
    return (
      <Wrapper>
        <h1>
          {this.state.listTitle} {this.state.counter}
          {this.props.title}
        </h1>
        <button onClick={this.changeTitle}>Change Title</button>
        <ul>
          {this.state.users.map((userData, index) => (
            <UsersListItem
              userData={userData}
              index={index}
              key={userData.name}
              deleteUsers={this.deleteUsers}
            />
          ))}
        </ul>
      </Wrapper>
    );
  }
}

export default UsersList;
