import logo from 'assets/logo.svg';
import './App.css';
import React, { useState } from 'react';

import UsersList from 'components/organisms/UsersList/UsersList';
import Form from 'components/organisms/Form/Form';

import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/globalStyle';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { users as usersData } from '../data/users';

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.grey};
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const initialFormState = {
  firstName: '',
  name: '',
  attendance: '',
  average: '',
  average: '',
};

function App() {
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState(usersData);
  const [formValues, setFormValues] = useState(initialFormState);

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
    console.log(formValues);
  };

  const changeTitle = () => {
    setCounter(counter + 1);
  };

  const deleteUsers = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };

    setUsers([...users, newUser]);
    setFormValues({
      firstName: '',
      name: '',
      attendance: '',
      average: '',
    });
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/add-user">Formularz</Link>
          </nav>
          <Routes>
            <Route
              path="/"
              element={
                <UsersList
                  title="Lista użytkowników"
                  counter={counter}
                  changeTitle={changeTitle}
                  users={users}
                  deleteUsers={deleteUsers}
                />
              }
            />
            <Route
              path="/add-user"
              element={
                <Form
                  formValues={formValues}
                  handleAddUser={handleAddUser}
                  handleInputChange={handleInputChange}
                />
              }
            />
          </Routes>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
}

export default App;
