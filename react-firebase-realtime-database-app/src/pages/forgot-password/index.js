import styled from '@emotion/styled';
import {useRef, useState, useContext} from 'react';
import {useHistory, Redirect, Link} from 'react-router-dom';
import {useAuth, AuthContext} from '../../contexts/AuthContext';

import {Layout} from '../../layouts/default';

import {ForgotPasswordContainer} from '../../components/forgot-password/ForgotPasswordContainer';
import {ForgotPasswordPageHeader} from '../../components/forgot-password/ForgotPasswordPageHeader';
import {ForgotPasswordButton} from '../../components/forgot-password/ForgotPasswordButton';
import {ForgotPasswordInputText} from '../../components/forgot-password/ForgotPasswordInputText';
import {ForgotPasswordPage} from '../../components/forgot-password/ForgotPasswordPage';
import {ForgotPasswordForm} from '../../components/forgot-password/ForgotPasswordForm';
import {ForgotPasswordInputLabel} from '../../components/forgot-password/ForgotPasswordInputLabel';
import {ForgotPasswordContainerContent} from '../../components/forgot-password/ForgotPasswordContainerContent';

const ForgotPassword = ({children}) => {
  const history = useHistory();
  // https://stackoverflow.com/questions/57854111/what-to-set-as-the-providers-value-in-order-to-change-context-from-a-consumer
  const {currentUser, resetPassword} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  if (currentUser) {
    return <Redirect to="/recent"></Redirect>;
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

  return (
    <Layout>
      <ForgotPasswordPage>
        <ForgotPasswordPageHeader>{'ForgotPassword'}</ForgotPasswordPageHeader>
        <ForgotPasswordContainer>
          <ForgotPasswordForm
            onSubmit={(e) => {
              e.preventDefault();
              return false;
            }}
          >
            <ForgotPasswordContainerContent>
              <ForgotPasswordInputLabel htmlFor="email">
                email
              </ForgotPasswordInputLabel>
              <ForgotPasswordInputText
                type={'text'}
                id="email"
                name="email"
                value={email}
                handleChangeEmail={handleChangeEmail}
              ></ForgotPasswordInputText>
            </ForgotPasswordContainerContent>
            {errorMessage && (
              <ForgotPasswordContainerContent>
                {errorMessage}
              </ForgotPasswordContainerContent>
            )}
            <ForgotPasswordContainerContent>
              <ForgotPasswordButton handleResetPassword={handleResetPassword}>
                {'ResetPassword'}
              </ForgotPasswordButton>
            </ForgotPasswordContainerContent>
            <ForgotPasswordContainerContent>
              Already Have an account? <Link to="/sign-in">Sign In</Link>
            </ForgotPasswordContainerContent>
          </ForgotPasswordForm>
        </ForgotPasswordContainer>
      </ForgotPasswordPage>
    </Layout>
  );
};

export {ForgotPassword};
