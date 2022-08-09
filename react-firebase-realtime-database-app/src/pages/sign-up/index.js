import styled from '@emotion/styled';
import {useRef, useState, useContext} from 'react';
import {useHistory, Redirect, Link} from 'react-router-dom';
import {useAuth, AuthContext} from '../../contexts/AuthContext';
import {Layout} from '../../layouts/default';

import {SignUpContainer} from '../../components/sign-up/SignUpContainer';
import {SignUpPageHeader} from '../../components/sign-up/SignUpPageHeader';
import {SignUpButton} from '../../components/sign-up/SignUpButton';
import {SignUpInputText} from '../../components/sign-up/SignUpInputText';
import {SignUpPage} from '../../components/sign-up/SignUpPage';
import {SignUpForm} from '../../components/sign-up/SignUpForm';
import {SignUpInputLabel} from '../../components/sign-up/SignUpInputLabel';
import {SignUpContainerContent} from '../../components/sign-up/SignUpContainerContent';

const SignUp = ({children}) => {
  const history = useHistory();
  // https://stackoverflow.com/questions/57854111/what-to-set-as-the-providers-value-in-order-to-change-context-from-a-consumer
  const {currentUser, signUp, verifyEmail, signIn} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [promotionMessage, setPromotionMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  if (currentUser) {
    return <Redirect to="/recent"></Redirect>;
  }

  const handleSignUp = async (e) => {
    try {
      const resultSignUpInfo = await signUp({email, password});
      console.log('resultSignUpInfo', resultSignUpInfo);
      // await verifyEmail({email});
      // setPromotionMessage('Please Verify Email');
      // console.log('resultVerifyEmail', resultVerifyEmail);
      history.push({pathname: '/recent'});
    } catch (error) {
      setErrorMessage('You haved an account');
      const resultSignInInfo = await signIn({email, password});
      setTimeout(() => {
        history.push({pathname: '/recent'});
      }, 2000);
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
      <SignUpPage>
        <SignUpPageHeader>{'SignUp'}</SignUpPageHeader>
        <SignUpContainer>
          <SignUpForm
            onSubmit={(e) => {
              e.preventDefault();
              return false;
            }}
          >
            <SignUpContainerContent>
              <SignUpInputLabel htmlFor="email">email</SignUpInputLabel>
              <SignUpInputText
                type={'text'}
                id="email"
                name="email"
                value={email}
                handleChangeEmail={handleChangeEmail}
              ></SignUpInputText>
            </SignUpContainerContent>
            <SignUpContainerContent>
              <SignUpInputLabel htmlFor="password">password</SignUpInputLabel>
              <SignUpInputText
                type={'password'}
                id="password"
                name="password"
                value={password}
                handleChangePassword={handleChangePassword}
              ></SignUpInputText>
            </SignUpContainerContent>
            {errorMessage && (
              <SignUpContainerContent>{errorMessage}</SignUpContainerContent>
            )}
            {promotionMessage && (
              <SignUpContainerContent>
                {promotionMessage}
              </SignUpContainerContent>
            )}
            <SignUpContainerContent>
              <SignUpButton onClick={handleSignUp}>{'SignUp'}</SignUpButton>
            </SignUpContainerContent>
            <SignUpContainerContent>
              Already Have an account? <Link to="/sign-in">Sign In</Link>
            </SignUpContainerContent>
          </SignUpForm>
        </SignUpContainer>
      </SignUpPage>
    </Layout>
  );
};

export {SignUp};
