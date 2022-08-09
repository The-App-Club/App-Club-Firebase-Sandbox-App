import React from 'react';
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
import {Home} from './pages/home';
import {DashBoard} from './pages/dashboard';
import {NotFound} from './pages/not-found';

import './styles/index.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Route
        render={({location}) => (
          <AnimatePresence initial={false} exitBeforeEnter>
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
