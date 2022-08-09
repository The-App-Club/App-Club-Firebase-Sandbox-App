import React from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import {Global, css} from '@emotion/react';
import {AnimatePresence} from 'framer-motion';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import {Login} from './pages/sign-in';

const StyledAppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    height: 100%;
  }
  @media screen and (max-device-width: 768px) {
    max-width: 100%;
    height: 100%;
  }
`;

const StyledAppContent = styled.div`
  width: 100%;
  max-width: 400px;
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
  @media screen and (max-device-width: 768px) {
    max-width: 100%;
  }
`;

function App() {
  return (
    <StyledAppContainer>
      <StyledAppContent>
        <Router>
          <Route
            render={({location}) => (
              <AnimatePresence initial={false} exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                  <Route
                    exact
                    path="/"
                    render={(props) => {
                      return (
                        <>
                          <Global styles={css``} />
                          <Login />
                        </>
                      );
                    }}
                  />
                </Switch>
              </AnimatePresence>
            )}
          />
        </Router>
      </StyledAppContent>
    </StyledAppContainer>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
