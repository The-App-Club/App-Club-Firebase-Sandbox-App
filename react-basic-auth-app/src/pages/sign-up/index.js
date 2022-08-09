import styled from '@emotion/styled';
import {useRef, useState, useContext} from 'react';
import {useHistory, Redirect, Link} from 'react-router-dom';
import {useAuth, AuthContext} from '../../contexts/AuthContext';

import {Layout} from '../../layouts/default';

const StyledSignUpPage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledSignUpPageHeader = styled.h2`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSignUpContainer = styled.div`
  width: 100%;
  max-width: 300px;
  border: 3px solid #000;
`;

const StyledSignUpForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledSignUpContainerContent = styled.div`
  width: 100%;
`;

const StyledSignUpInputLabel = styled.label`
  width: 100%;
  margin-top: 0.5rem;
`;

const StyledSignUpInputText = styled.input`
  width: 100%;
  margin-top: 1rem;
`;

const StyledSignUpButton = styled.button`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignUp = ({children}) => {
  const history = useHistory();
  // https://stackoverflow.com/questions/57854111/what-to-set-as-the-providers-value-in-order-to-change-context-from-a-consumer
  const {currentUser, signUp, verifyEmail, signIn} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [promotionMessage, setPromotionMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  if (currentUser) {
    return <Redirect to="/dashboard"></Redirect>;
  }

  const handleSignUp = async (e) => {
    try {
      const resultSignUpInfo = await signUp({email, password});
      console.log('resultSignUpInfo', resultSignUpInfo);
      // await verifyEmail({email});
      // setPromotionMessage('Please Verify Email');
      // console.log('resultVerifyEmail', resultVerifyEmail);
      // history.push({pathname: '/dashboard'});
    } catch (error) {
      setErrorMessage('You haved an account');
      const resultSignInInfo = await signIn({email, password});
      setTimeout(() => {
        history.push({pathname: '/dashboard'});
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
      <StyledSignUpPage>
        <StyledSignUpPageHeader>{'SignUp'}</StyledSignUpPageHeader>
        <StyledSignUpContainer>
          <StyledSignUpForm
            onSubmit={(e) => {
              e.preventDefault();
              return false;
            }}
          >
            <StyledSignUpContainerContent>
              <StyledSignUpInputLabel htmlFor="email">
                email
              </StyledSignUpInputLabel>
              <StyledSignUpInputText
                type={'text'}
                id="email"
                name="email"
                value={email}
                onChange={handleChangeEmail}
              ></StyledSignUpInputText>
            </StyledSignUpContainerContent>
            <StyledSignUpContainerContent>
              <StyledSignUpInputLabel htmlFor="password">
                password
              </StyledSignUpInputLabel>
              <StyledSignUpInputText
                type={'password'}
                id="password"
                name="password"
                value={password}
                onChange={handleChangePassword}
              ></StyledSignUpInputText>
            </StyledSignUpContainerContent>
            {errorMessage && (
              <StyledSignUpContainerContent>
                {errorMessage}
              </StyledSignUpContainerContent>
            )}
            {promotionMessage && (
              <StyledSignUpContainerContent>
                {promotionMessage}
              </StyledSignUpContainerContent>
            )}
            <StyledSignUpContainerContent>
              <StyledSignUpButton onClick={handleSignUp}>
                {'SignUp'}
              </StyledSignUpButton>
            </StyledSignUpContainerContent>
            <StyledSignUpContainerContent>
              Already Have an account? <Link to="/sign-in">Sign In</Link>
            </StyledSignUpContainerContent>
          </StyledSignUpForm>
        </StyledSignUpContainer>
      </StyledSignUpPage>
    </Layout>
  );
};

export {SignUp};
