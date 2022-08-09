import React from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import {Global, css} from '@emotion/react';
import {AnimatePresence} from 'framer-motion';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import {AuthProvider} from './contexts/AuthContext';
import {PrivateRoute} from './components/routing';
import {NotFound} from './components/not-found';

import {SignUp} from './pages/sign-up';
import {SignIn} from './pages/sign-in';
import {PleaseConfirmReceiveMailbox} from './pages/please-confirm-receive-mailbox';
import {ForgotPassword} from './pages/forgot-password';
import {ChangePassword} from './pages/change-password';
import {CompletePassword} from './pages/complete-password';
import {InputCowboyBebop} from './pages/cowboy-bebop-input';
import {AuthTypeHandler} from './pages/auth-type-handler';

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
          <AuthProvider>
            <Route
              render={({location}) => (
                <AnimatePresence initial={false} exitBeforeEnter>
                  <Switch location={location} key={location.pathname}>
                    <PrivateRoute exact path="/" component={SignIn} />
                    <Route
                      exact
                      path="/magic"
                      render={(props) => {
                        return (
                          <>
                            <Global styles={css``} />
                            <AuthTypeHandler />
                          </>
                        );
                      }}
                    />
                    <Route
                      exact
                      path="/please-confirm-receive-mailbox"
                      render={(props) => {
                        return (
                          <>
                            <Global styles={css``} />
                            <PleaseConfirmReceiveMailbox
                              pageType={props.location.state.pageType}
                            />
                          </>
                        );
                      }}
                    />
                    <Route
                      exact
                      path="/sign-up"
                      render={() => {
                        return (
                          <>
                            <Global styles={css``} />
                            <SignUp />
                          </>
                        );
                      }}
                    />
                    <Route
                      exact
                      path="/login"
                      render={() => {
                        return (
                          <>
                            <Global styles={css``} />
                            <SignIn />
                          </>
                        );
                      }}
                    />
                    <Route
                      exact
                      path="/forgot-password"
                      render={() => {
                        return (
                          <>
                            <Global styles={css``} />
                            <ForgotPassword />
                          </>
                        );
                      }}
                    />
                    <Route
                      exact
                      path="/change-password"
                      render={(props) => {
                        return (
                          <>
                            <Global styles={css``} />
                            <ChangePassword
                              actionState={props.location.state.actionState}
                            />
                          </>
                        );
                      }}
                    />
                    <Route
                      exact
                      path="/complete-password"
                      render={() => {
                        return (
                          <>
                            <Global styles={css``} />
                            <CompletePassword />
                          </>
                        );
                      }}
                    />

                    <Route
                      exact
                      path="/CowboyBebop-input"
                      render={() => {
                        return (
                          <>
                            <Global styles={css``} />
                            <InputCowboyBebop />
                          </>
                        );
                      }}
                    />

                    <Route
                      exact
                      path="/*"
                      render={() => {
                        return (
                          <>
                            <NotFound />
                          </>
                        );
                      }}
                    />
                  </Switch>
                </AnimatePresence>
              )}
            />
          </AuthProvider>
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
