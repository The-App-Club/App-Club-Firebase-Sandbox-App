import {useRef, useState} from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/css';
import {Link, useHistory} from 'react-router-dom';

import {BsFillEyeFill} from 'react-icons/bs';
import {BsFillEyeSlashFill} from 'react-icons/bs';
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

const StyledSignIn = styled.div`
  width: 100%;
`;

const StyledSignInHeader = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
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

const StyledIcon = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
  z-index: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const SignIn = ({children}) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const {login} = useAuth();
  const [disabled, setDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [displayPasswordType, setDisplayPasswordType] = useState('password');

  const history = useHistory();

  const handleChange = (e, {inputValue}) => {
    if (inputValue === 'password') {
      setDisabled(false);
    }
    setErrorMessage('');
  };

  const handleKeyUp = (e) => {
    setErrorMessage('');
  };

  const handleBlur = (e) => {
    setErrorMessage('');
  };

  const toggleShowPassword = (e) => {
    setIsShowPassword((isShowPassword) => {
      return !isShowPassword;
    });
    if (isShowPassword) {
      setDisplayPasswordType('password');
    } else {
      setDisplayPasswordType('text');
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setErrorMessage('');
      setLoading(true);
      await login({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      setLoading(false);
      setSuccessMessage('You are logged in.');
      setTimeout(() => {
        history.push('/CowboyBebop-input');
      }, 1200);
    } catch (error) {
      console.log(error);
      setErrorMessage('Email address or password does not match your registration information');
      setLoading(false);
      setDisabled(true);
    }
  }

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
      <StyledSignIn>
        <Spacer />
        <StyledSignInHeader>{'Login'}</StyledSignInHeader>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
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
          <Form.Group
            style={{
              position: 'relative',
              userSelect: 'none',
            }}
          >
            <Form.Control
              required
              autoComplete="current-password"
              type={displayPasswordType}
              pattern="^[\da-zA-Z]{8,16}$"
              minLength="8"
              maxLength="16"
              ref={passwordRef}
              placeholder="Enter your password"
              onChange={(e) => {
                handleChange(e, {inputValue: 'password'});
              }}
              onKeyUp={handleKeyUp}
              onBlur={handleBlur}
            />
            <StyledIcon onClick={toggleShowPassword}>
              {isShowPassword ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
            </StyledIcon>
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
            {'Login'}
            <StyledLoadingIcon>
              {loading ? <Loading /> : null}
            </StyledLoadingIcon>
          </Button>
        </Form>
        <Spacer />
        <StyledHelpLinkContainer>
          <Link
            to="/forgot-password"
            className={css`
              text-decoration: none;
            `}
          >
            {'Forgot your password?'}
          </Link>
        </StyledHelpLinkContainer>
        <StyledHelpLinkContainer>
          <StyledHelpLink
            href="https://example.com"
            target="_blank"
            rel="noreferrer"
          >
            {'Having trouble logging in?'}
          </StyledHelpLink>
        </StyledHelpLinkContainer>
      </StyledSignIn>
    </Layout>
  );
};

export {SignIn};
