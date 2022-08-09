import styled from '@emotion/styled';
import {useRef, useState, useContext} from 'react';
import {useHistory, Redirect, Link} from 'react-router-dom';
import {useAuth, AuthContext} from '../../contexts/AuthContext';

import {Layout} from '../../layouts/default';

import {SignInContainer} from '../../components/sign-in/SignInContainer';
import {SignInPageHeader} from '../../components/sign-in/SignInPageHeader';
import {SignInButton} from '../../components/sign-in/SignInButton';
import {SignInInputText} from '../../components/sign-in/SignInInputText';
import {SignInPage} from '../../components/sign-in/SignInPage';
import {SignInForm} from '../../components/sign-in/SignInForm';
import {SignInInputLabel} from '../../components/sign-in/SignInInputLabel';
import {SignInContainerContent} from '../../components/sign-in/SignInContainerContent';

const SignIn = ({children}) => {
  const history = useHistory();
  // https://stackoverflow.com/questions/57854111/what-to-set-as-the-providers-value-in-order-to-change-context-from-a-consumer
  const {currentUser, signIn} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  if (currentUser) {
    return <Redirect to="/recent"></Redirect>;
  }

  const handleSignIn = async (e) => {
    try {
      const resultSignInInfo = await signIn({email, password});
      console.log(resultSignInInfo);
      history.push({pathname: '/recent'});
    } catch (error) {
      console.log(error);
      setErrorMessage('something wrong...');
    }
  };

  const handleChangeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handleChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  return (
    <Layout>
      <SignInPage>
        <SignInPageHeader>{'SignIn'}</SignInPageHeader>
        <SignInContainer>
          <SignInForm>
            <SignInContainerContent>
              <SignInInputLabel htmlFor="email">email</SignInInputLabel>
              <SignInInputText
                type={'text'}
                id="email"
                name="email"
                value={email}
                handleChangeEmail={handleChangeEmail}
              ></SignInInputText>
            </SignInContainerContent>
            <SignInContainerContent>
              <SignInInputLabel htmlFor="password">password</SignInInputLabel>
              <SignInInputText
                type={'password'}
                id="password"
                name="password"
                value={password}
                handleChangePassword={handleChangePassword}
              ></SignInInputText>
            </SignInContainerContent>
            {errorMessage && (
              <SignInContainerContent>{errorMessage}</SignInContainerContent>
            )}
            <SignInContainerContent>
              <SignInButton handleSignIn={handleSignIn}>
                {'SignIn'}
              </SignInButton>
            </SignInContainerContent>
            <SignInContainerContent>
              Need an account? <Link to="/sign-up">Sign Up</Link>
            </SignInContainerContent>
            <SignInContainerContent>
              Forgot Password?{' '}
              <Link to="/forgot-password">Forgot Password</Link>
            </SignInContainerContent>
          </SignInForm>
        </SignInContainer>
      </SignInPage>
    </Layout>
  );
};

export {SignIn};
