import {useRef, useState} from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/css';
import {useHistory} from 'react-router-dom';

import {BsFillEyeFill} from 'react-icons/bs';
import {BsFillEyeSlashFill} from 'react-icons/bs';
import {Form, Button, Alert} from 'react-bootstrap';

import {useAuth} from '../../contexts/AuthContext';
import {Layout} from '../../layouts/default';
import {Spacer} from '../../components/spacer';
import {
  SignUpHeader,
  SignUpPromotionMessage,
  PasswordRestrictionInfoMessage,
} from '../../components/sign-up';
import {Message} from '../../components/message';
import {CaptureResize} from '../../components/resize';
import {Loading} from '../../components/loading';

const StyledSignUp = styled.div`
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

const StyledFormButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2vw;
`;

const StyledTermsOfServiceContainer = styled.div`
  width: 100%;
  height: 150px;
  overflow: hidden;
  overflow-y: auto;
`;

const StyledTermsOfServiceHeader = styled.h6`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  position: sticky;
`;

const StyledTermsOfServiceContent = styled.p`
  padding: 10px 10px;
`;

const SignUp = ({children}) => {
  const c = useRef(null);

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const {signUp, verifyEmail} = useAuth();

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

  const [displayPasswordType, setDisplayPasswordType] = useState('password');
  const [displayConfirmPasswordType, setDisplayConfirmPasswordType] =
    useState('password');

  const [disabled, setDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      setErrorMessage('Password and password (confirmation) are different');
      return;
    }

    try {
      setErrorMessage('');
      setLoading(true);
      await signUp({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      await verifyEmail({email: emailRef.current.value});
      setLoading(false);
      setSuccessMessage('Signed up.');
      setTimeout(() => {
        history.push('/please-confirm-receive-mailbox', {
          pageType: 'sign-up',
        });
      }, 1200);
    } catch (error) {
      console.log(error);
      setErrorMessage('Registration failed.');
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

  const handleChange = (e, {inputValue}) => {
    if (inputValue === 'password') {
      const value = passwordRef.current.value;
      setConfirmPassword(value);
      setPassword(value);
      const regex = new RegExp(/^[\da-zA-Z]{8,16}$/);
      const isMatch = regex.test(value);
      if (!isMatch) {
        setErrorMessage(
          'Please enter a combination of single-byte alphabetic and numeric characters with a maximum length of 8 to 16 characters.'
        );
        setDisabled(true);
        return;
      }
    }
    if (inputValue === 'password-confirm') {
      const value = passwordConfirmRef.current.value;
      setConfirmPassword(value);
      const regex = new RegExp(/^[\da-zA-Z]{8,16}$/);
      const isMatch = regex.test(value);
      if (!isMatch) {
        setErrorMessage(
          'Please enter a combination of single-byte alphabetic and numeric characters with a maximum length of 8 to 16 characters.'
        );
        setDisabled(true);
        return;
      }
    }
    setErrorMessage('');
  };

  const handleKeyUp = (e) => {};

  const handleBlur = (e) => {};

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

  const toggleShowConfirmPassword = (e) => {
    setIsShowConfirmPassword((isShowConfirmPassword) => {
      return !isShowConfirmPassword;
    });
    if (isShowConfirmPassword) {
      setDisplayConfirmPasswordType('password');
    } else {
      setDisplayConfirmPasswordType('text');
    }
  };

  return (
    <Layout>
      <StyledSignUp>
        <Spacer />
        <SignUpHeader>{'New Member Registration'}</SignUpHeader>
        <SignUpPromotionMessage>
          {
            'Please read the "Terms of Use" and register your e-mail address and password.'
          }
        </SignUpPromotionMessage>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control
              required
              type="email"
              ref={emailRef}
              placeholder="Enter your email address"
              onChange={(e) => {
                handleChange(e, {inputValue: 'email'});
              }}
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
              autoComplete="new-password"
              type={displayPasswordType}
              pattern="^[\da-zA-Z]{8,16}$"
              minLength="8"
              maxLength="16"
              ref={passwordRef}
              value={password}
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
          <Form.Group
            style={{
              position: 'relative',
              userSelect: 'none',
            }}
          >
            <Form.Control
              required
              type={displayConfirmPasswordType}
              ref={passwordConfirmRef}
              value={confirmPassword}
              placeholder="Password (for confirmation)"
              onChange={(e) => {
                handleChange(e, {inputValue: 'password-confirm'});
              }}
              onKeyUp={handleKeyUp}
              onBlur={handleBlur}
            />
            <StyledIcon onClick={toggleShowConfirmPassword}>
              {isShowConfirmPassword ? (
                <BsFillEyeFill />
              ) : (
                <BsFillEyeSlashFill />
              )}
            </StyledIcon>
          </Form.Group>
          <PasswordRestrictionInfoMessage>
            {
              'Please enter a combination of single-byte alphabetic and numeric characters with a maximum length of 8 to 16 characters.'
            }
          </PasswordRestrictionInfoMessage>
          <Spacer />
          <CaptureResize captureRef={c}>
            {(size) => {
              return (
                <>
                  <StyledTermsOfServiceHeader className={css``}>
                    {'Terms of Use'}
                  </StyledTermsOfServiceHeader>
                  <StyledTermsOfServiceContainer ref={c}>
                    <StyledTermsOfServiceContent>
                      {
                        'hogehoge'
                      }
                    </StyledTermsOfServiceContent>
                  </StyledTermsOfServiceContainer>
                </>
              );
            }}
          </CaptureResize>

          <Spacer />

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              onChange={(e) => {
                toggleCheckbox(e);
              }}
              label="I agree to the Terms of Use"
              style={{
                marginRight: '5px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              className={css`
                & input {
                  margin-right: 5px;
                  margin-bottom: 4px;
                }
              `}
            />
          </Form.Group>
          <Spacer />
          {renderAlert({errorMessage, successMessage})}
          <Spacer />
          <StyledFormButtonContainer>
            <Button
              disabled={!isChecked && disabled}
              className="w-100"
              type="submit"
              style={{
                position: 'relative',
              }}
            >
              {'登録する'}
              <StyledLoadingIcon>
                {loading ? <Loading /> : null}
              </StyledLoadingIcon>
            </Button>
          </StyledFormButtonContainer>
        </Form>
        <StyledHelpLinkContainer>
          <StyledHelpLink
            href="https://example.com"
            target="_blank"
            rel="noreferrer"
          >
            {'Unable to register?'}
          </StyledHelpLink>
        </StyledHelpLinkContainer>
      </StyledSignUp>
    </Layout>
  );
};

export {SignUp};
