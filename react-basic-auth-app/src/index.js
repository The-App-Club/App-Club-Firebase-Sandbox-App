import React from 'react';
import ReactDOM from 'react-dom';
import {AuthProvider} from './contexts/AuthContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import {Global, css} from '@emotion/react';
import {ScrollToTop} from './components/scroll';
import {Header} from './components/header';
import {Footer} from './components/footer';
import {DashBoard} from './pages/dashboard';
import {SignUp} from './pages/sign-up';
import {FinishSignUp} from './pages/finish-sign-up';
import {SignIn} from './pages/sign-in';
import {ForgotPassword} from './pages/forgot-password';
import {NotFound} from './pages/not-found';

import './styles/index.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Route
        render={({location}) => (
          <AnimatePresence initial={false} exitBeforeEnter>
            <AuthProvider>
              <Switch location={location} key={location.pathname}>
                <Route
                  exact
                  path="/sign-in"
                  render={() => {
                    return (
                      <>
                        <Global
                          styles={css`
                            /* https://emotion.sh/docs/globals */
                          `}
                        />
                        <Header></Header>
                        <SignIn></SignIn>
                        <Footer></Footer>
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
                        <Global
                          styles={css`
                            /* https://emotion.sh/docs/globals */
                          `}
                        />
                        <Header></Header>
                        <ForgotPassword></ForgotPassword>
                        <Footer></Footer>
                      </>
                    );
                  }}
                />
                <Route
                  exact
                  path="/"
                  render={() => {
                    return (
                      <>
                        <Global
                          styles={css`
                            /* https://emotion.sh/docs/globals */
                          `}
                        />
                        <Header></Header>
                        <SignUp></SignUp>
                        <Footer></Footer>
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
                        <Global
                          styles={css`
                            /* https://emotion.sh/docs/globals */
                          `}
                        />
                        <Header></Header>
                        <SignUp></SignUp>
                        <Footer></Footer>
                      </>
                    );
                  }}
                />
                <Route
                  exact
                  path="/finish-sign-up"
                  render={() => {
                    return (
                      <>
                        <Global
                          styles={css`
                            /* https://emotion.sh/docs/globals */
                          `}
                        />
                        <Header></Header>
                        <FinishSignUp></FinishSignUp>
                        <Footer></Footer>
                      </>
                    );
                  }}
                />
                <Route
                  exact
                  path="/dashboard"
                  render={() => {
                    return (
                      <>
                        <Global
                          styles={css`
                            /* https://emotion.sh/docs/globals */
                          `}
                        />
                        <Header></Header>
                        <DashBoard></DashBoard>
                        <Footer></Footer>
                      </>
                    );
                  }}
                />
                <Route
                  path="/*"
                  render={() => {
                    return (
                      <>
                        <Global
                          styles={css`
                            /* https://emotion.sh/docs/globals */
                          `}
                        />
                        <Header></Header>
                        <NotFound></NotFound>
                        <Footer></Footer>
                      </>
                    );
                  }}
                />
              </Switch>
            </AuthProvider>
          </AnimatePresence>
        )}
      />
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
