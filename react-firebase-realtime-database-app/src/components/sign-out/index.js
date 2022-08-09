import styled from '@emotion/styled';
import {useHistory} from 'react-router-dom';
import {useContext} from 'react';
import {AuthContext} from '../../contexts/AuthContext';

const StyledSignOut = styled.button``;

const SignOut = () => {
  const history = useHistory();
  // https://firebase.google.com/docs/auth/web/password-auth?hl=ja#next_steps
  const {signOut} = useContext(AuthContext);

  const handleSignOut = async (e) => {
    await signOut();
    setTimeout(() => {
      history.push({
        pathname: '/',
      });
    }, 1000);
  };

  return <StyledSignOut onClick={handleSignOut}>{'Sign Out'}</StyledSignOut>;
};

export {SignOut};
