import {useRef, useState} from 'react';
import styled from '@emotion/styled';
import {useHistory} from 'react-router-dom';

import {Form, Button, Alert} from 'react-bootstrap';

import {Layout} from '../../layouts/default';
import {Spacer} from '../../components/spacer';
import {useAuth} from '../../contexts/AuthContext';
import {Message} from '../../components/message';
import {Loading} from '../../components/loading';

const StyledHelpLinkContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const StyledHelpLink = styled.a`
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;

const StyledForgotPassword = styled.div`
  width: 100%;
`;

const StyledLoadingIcon = styled.span`
  position: absolute;
  top: 0;
  right: 0px;
  z-index: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledForgotPasswordHeader = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const StyledForgotPasswordPromotionMessage = styled.p``;

const ForgotPassword = ({children}) => {
  const emailRef = useRef();
  const {resetPassword} = useAuth();
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setErrorMessage('');
      setLoading(true);
      await resetPassword({email: emailRef.current.value});
      setLoading(false);
      setSuccessMessage('Sent.');
      setTimeout(() => {
        history.push('/please-confirm-receive-mailbox', {
          pageType: 'forgot-password',
        });
      }, 1200);
    } catch (error) {
      console.log(error);
      setErrorMessage('The email address you entered is not registered.');
      setLoading(false);
      setDisabled(true);
    }
  }

  const handleChange = (e) => {
    const value = emailRef.current.value;
    if (value) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
    setErrorMessage('');
  };

  const handleKeyUp = (e) => {
    const value = emailRef.current.value;
    if (value) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
    setErrorMessage('');
  };

  const handleBlur = (e) => {
    const value = emailRef.current.value;
    if (value) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
    setErrorMessage('');
  };

  const renderAlert = ({errorMessage, successMessage}) => {
    if (errorMessage) {
      return (
        <Message isVisible={errorMessage ? true : false}>
          <Alert
            variant="danger"
            style={{
              margin: 0,
              height: '64px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {errorMessage}
          </Alert>
        </Message>
      );
    }
    if (successMessage) {
      return (
        <Message isVisible={successMessage ? true : false}>
          <Alert
            variant="success"
            style={{
              margin: 0,
              height: '64px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {successMessage}
          </Alert>
        </Message>
      );
    }
    return (
      <div
        style={{
          width: '100%',
          height: '64px',
        }}
      >
        {' '}
      </div>
    );
  };

  return (
    <Layout>
      <StyledForgotPassword>
        <Spacer />
        <StyledForgotPasswordHeader>
          {'Password Re-registration Procedure'}
        </StyledForgotPasswordHeader>
        <StyledForgotPasswordPromotionMessage>
          {
            'You will be notified of the password re-registration procedure at the e-mail address you entered during registration.'
          }
        </StyledForgotPasswordPromotionMessage>
        <Spacer />
        <Form onSubmit={handleSubmit}>
          <Form.Group id="email">
            <Form.Control
              required
              type="email"
              ref={emailRef}
              placeholder="Enter your email address"
              onChange={handleChange}
              onKeyUp={handleKeyUp}
              onBlur={handleBlur}
            />
          </Form.Group>
          <Spacer />
          {renderAlert({errorMessage, successMessage})}
          <Spacer />
          <Button
            disabled={disabled}
            className="w-100"
            type="submit"
            style={{
              position: 'relative',
            }}
          >
            {'transmission'}
            <StyledLoadingIcon>
              {loading ? <Loading /> : null}
            </StyledLoadingIcon>
          </Button>
        </Form>
        <StyledHelpLinkContainer>
          <StyledHelpLink
            href="https://example.com"
            target="_blank"
            rel="noreferrer"
          >
            {'Forgot your registered e-mail address?'}
          </StyledHelpLink>
        </StyledHelpLinkContainer>
      </StyledForgotPassword>
    </Layout>
  );
};

export {ForgotPassword};
