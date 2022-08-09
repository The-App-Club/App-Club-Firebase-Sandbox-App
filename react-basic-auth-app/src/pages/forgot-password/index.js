import styled from '@emotion/styled';
import {useRef, useState, useContext} from 'react';
import {useHistory, Redirect, Link} from 'react-router-dom';
import {useAuth, AuthContext} from '../../contexts/AuthContext';

import {Layout} from '../../layouts/default';

const StyledForgotPasswordPage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledForgotPasswordPageHeader = styled.h2`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledForgotPasswordContainer = styled.div`
  width: 100%;
  max-width: 300px;
  border: 3px solid #000;
`;

const StyledForgotPasswordForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledForgotPasswordContainerContent = styled.div`
  width: 100%;
`;

const StyledForgotPasswordInputLabel = styled.label`
  width: 100%;
  margin-top: 0.5rem;
`;

const StyledForgotPasswordInputText = styled.input`
  width: 100%;
  margin-top: 1rem;
`;

const StyledForgotPasswordButton = styled.button`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ForgotPassword = ({children}) => {
  const history = useHistory();
  // https://stackoverflow.com/questions/57854111/what-to-set-as-the-providers-value-in-order-to-change-context-from-a-consumer
  const {currentUser, resetPassword} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  if (currentUser) {
    return <Redirect to="/dashboard"></Redirect>;
  }

  const handleResetPassword = async (e) => {
    try {
      await resetPassword({email});
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
      <StyledForgotPasswordPage>
        <StyledForgotPasswordPageHeader>
          {'ForgotPassword'}
        </StyledForgotPasswordPageHeader>
        <StyledForgotPasswordContainer>
          <StyledForgotPasswordForm
            onSubmit={(e) => {
              e.preventDefault();
              return false;
            }}
          >
            <StyledForgotPasswordContainerContent>
              <StyledForgotPasswordInputLabel htmlFor="email">
                email
              </StyledForgotPasswordInputLabel>
              <StyledForgotPasswordInputText
                type={'text'}
                id="email"
                name="email"
                value={email}
                onChange={handleChangeEmail}
              ></StyledForgotPasswordInputText>
            </StyledForgotPasswordContainerContent>
            {errorMessage && (
              <StyledForgotPasswordContainerContent>
                {errorMessage}
              </StyledForgotPasswordContainerContent>
            )}
            <StyledForgotPasswordContainerContent>
              <StyledForgotPasswordButton onClick={handleResetPassword}>
                {'ResetPassword'}
              </StyledForgotPasswordButton>
            </StyledForgotPasswordContainerContent>
            <StyledForgotPasswordContainerContent>
              Already Have an account? <Link to="/sign-in">Sign In</Link>
            </StyledForgotPasswordContainerContent>
          </StyledForgotPasswordForm>
        </StyledForgotPasswordContainer>
      </StyledForgotPasswordPage>
    </Layout>
  );
};

export {ForgotPassword};
