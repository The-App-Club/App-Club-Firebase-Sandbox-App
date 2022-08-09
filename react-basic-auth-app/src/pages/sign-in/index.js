import styled from '@emotion/styled';
import {useRef, useState, useContext} from 'react';
import {useHistory, Redirect, Link} from 'react-router-dom';
import {useAuth, AuthContext} from '../../contexts/AuthContext';

import {Layout} from '../../layouts/default';

const StyledSignInPage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledSignInPageHeader = styled.h2`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSignInContainer = styled.div`
  width: 100%;
  max-width: 300px;
  border: 3px solid #000;
`;

const StyledSignInForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledSignInContainerContent = styled.div`
  width: 100%;
`;

const StyledSignInInputLabel = styled.label`
  width: 100%;
  margin-top: 0.5rem;
`;

const StyledSignInInputText = styled.input`
  width: 100%;
  margin-top: 1rem;
`;

const StyledSignInButton = styled.button`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignIn = ({children}) => {
  const history = useHistory();
  // https://stackoverflow.com/questions/57854111/what-to-set-as-the-providers-value-in-order-to-change-context-from-a-consumer
  const {currentUser, signIn} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  if (currentUser) {
    return <Redirect to="/dashboard"></Redirect>;
  }

  const handleSignIn = async (e) => {
    try {
      const resultSignInInfo = await signIn({email, password});
      console.log(resultSignInInfo);
      history.push({pathname: '/dashboard'});
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
      <StyledSignInPage>
        <StyledSignInPageHeader>{'SignIn'}</StyledSignInPageHeader>
        <StyledSignInContainer>
          <StyledSignInForm
            onSubmit={(e) => {
              e.preventDefault();
              return false;
            }}
          >
            <StyledSignInContainerContent>
              <StyledSignInInputLabel htmlFor="email">
                email
              </StyledSignInInputLabel>
              <StyledSignInInputText
                type={'text'}
                id="email"
                name="email"
                value={email}
                onChange={handleChangeEmail}
              ></StyledSignInInputText>
            </StyledSignInContainerContent>
            <StyledSignInContainerContent>
              <StyledSignInInputLabel htmlFor="password">
                password
              </StyledSignInInputLabel>
              <StyledSignInInputText
                type={'password'}
                id="password"
                name="password"
                value={password}
                onChange={handleChangePassword}
              ></StyledSignInInputText>
            </StyledSignInContainerContent>
            {errorMessage && (
              <StyledSignInContainerContent>
                {errorMessage}
              </StyledSignInContainerContent>
            )}
            <StyledSignInContainerContent>
              <StyledSignInButton onClick={handleSignIn}>
                {'SignIn'}
              </StyledSignInButton>
            </StyledSignInContainerContent>
            <StyledSignInContainerContent>
              Need an account? <Link to="/sign-up">Sign Up</Link>
            </StyledSignInContainerContent>
            <StyledSignInContainerContent>
              Forgot Password?{' '}
              <Link to="/forgot-password">Forgot Password</Link>
            </StyledSignInContainerContent>
          </StyledSignInForm>
        </StyledSignInContainer>
      </StyledSignInPage>
    </Layout>
  );
};

export {SignIn};
