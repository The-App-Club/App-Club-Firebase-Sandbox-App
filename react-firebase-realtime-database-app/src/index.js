import React, {useState} from 'react';
import ReactDOM from 'react-dom';
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

import {AuthProvider} from './contexts/AuthContext';

import {Home} from './pages/home';
import {Recent} from './pages/recent';
import {MyPosts} from './pages/my-posts';
import {MyTopPosts} from './pages/my-top-posts';
import {NotFound} from './pages/not-found';
import {SignUp} from './pages/sign-up';
import {SignIn} from './pages/sign-in';
import {ForgotPassword} from './pages/forgot-password';

import './styles/index.css';

import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

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
                        <Home></Home>
                        <Footer></Footer>
                      </>
                    );
                  }}
                />
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
                  path="/my-posts"
                  render={() => {
                    return (
                      <>
                        <Global
                          styles={css`
                            /* https://emotion.sh/docs/globals */
                          `}
                        />
                        <Header></Header>
                        <MyPosts></MyPosts>
                        <Footer></Footer>
                      </>
                    );
                  }}
                />

                <Route
                  exact
                  path="/my-top-posts"
                  render={() => {
                    return (
                      <>
                        <Global
                          styles={css`
                            /* https://emotion.sh/docs/globals */
                          `}
                        />
                        <Header></Header>
                        <MyTopPosts></MyTopPosts>
                        <Footer></Footer>
                      </>
                    );
                  }}
                />
                <Route
                  exact
                  path="/recent"
                  render={() => {
                    return (
                      <>
                        <Global
                          styles={css`
                            /* https://emotion.sh/docs/globals */
                          `}
                        />
                        <Header></Header>
                        <QueryClientProvider client={queryClient}>
                          <Recent></Recent>
                        </QueryClientProvider>
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
