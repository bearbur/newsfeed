import React from 'react';
import NavigationContainer from './containers/navigation-container';
import NewsContainer from './containers/news-container';
import styled from "styled-components";

const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const Header = styled.header`
    display: flex;
    flex-direction: column;
`;

const Main = styled.main`
    border: 1px solid orange;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

function App() {
  return (
    <AppWrapper>
      <Header>
        <NavigationContainer/>
      </Header>
      <Main>
        <NewsContainer/>
      </Main>
    </AppWrapper>
  );
}

export default App;
