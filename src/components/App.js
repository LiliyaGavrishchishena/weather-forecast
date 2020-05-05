import React from 'react';
import { useRoutes } from 'hookrouter';
//components
import Nav from './Nav';
import Footer from './Footer';
//routes
import routes from '../router';
//styled-components
import styled from 'styled-components';

const Content = styled.div`
  min-height: calc(100vh - 70px);
`;

const Bottom = styled.footer`
  height: 50px;
`;

const App = () => {
  const routeResult = useRoutes(routes);
  return (
    <>
      <Content>
        <Nav />
        {routeResult}
      </Content>
      <Bottom>
        <Footer />
      </Bottom>
    </>
  );
};

export default App;
