import logo from 'assets/logo.svg';
import './App.css';
import UsersList from 'components/organisms/UsersList/UsersList';

import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/globalStyle';
import { theme } from 'assets/styles/theme';

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.grey};
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <UsersList />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
