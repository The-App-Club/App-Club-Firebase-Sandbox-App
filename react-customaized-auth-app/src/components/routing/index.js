import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useAuth} from '../../contexts/AuthContext';

const PrivateRoute = ({component: Component, ...rest}) => {
  const {currentUser} = useAuth();
  console.log('currentUser', currentUser);
  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/sign-up" />
        );
      }}
    ></Route>
  );
};

export {PrivateRoute};
