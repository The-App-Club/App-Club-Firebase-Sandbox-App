import {useRef, useState} from 'react';
import styled from '@emotion/styled';
import {Form, Button, Alert} from 'react-bootstrap';
import {useAuth} from '../../contexts/AuthContext';
import {useHistory} from 'react-router-dom';

import {BsFillEyeFill} from 'react-icons/bs';
import {BsFillEyeSlashFill} from 'react-icons/bs';

import {Layout} from '../../layouts/default';
import {Spacer} from '../../components/spacer';
import {Message} from '../../components/message';
import {Loading} from '../../components/loading';

const StyledChangePassword = styled.div`
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

const StyledChangePasswordHeader = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const StyledChangePasswordPromotionMessage = styled.p``;

const StyledPasswordRestrictionInfoMessage = styled.p`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 0.8rem;
  padding-top: 3px;
`;

const ChangePassword = ({actionState}) => {
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

  const [displayPasswordType, setDisplayPasswordType] = useState('password');
  const [displayConfirmPasswordType, setDisplayConfirmPasswordType] =
    useState('password');

  const [disabled, setDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const {changePassword} = useAuth();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      setErrorMessage('Password and password (confirmation) are different');
      setDisabled(true);
      return;
    }

    try {
      setErrorMessage('');
      setLoading(true);
      await changePassword({
        mode: actionState.mode,
        actionCode: actionState.actionCode,
        continueURL: actionState.continueURL,
        password: passwordRef.current.value,
      });
      setLoading(false);
      setSuccessMessage('Password has been changed.');
      setTimeout(() => {
        history.push('/complete-password');
      }, 1200);
    } catch (error) {
      console.log(error);
      setErrorMessage('Password matches last time.');
      setDisabled(true);
      return;
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
      setConfirmPassword(passwordRef.current.value);
      setPassword(passwordRef.current.value);
    }
    if (inputValue === 'password-confirm') {
      setConfirmPassword(passwordConfirmRef.current.value);
    }
    if (inputValue === 'password') {
      setDisabled(false);
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
      <StyledChangePassword>
        <Spacer />
        <StyledChangePasswordHeader>
          {'Register new password'}
        </StyledChangePasswordHeader>
        <StyledChangePasswordPromotionMessage>
          {'Please enter your new password'}
        </StyledChangePasswordPromotionMessage>
        <Form onSubmit={handleSubmit}>
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
          <StyledPasswordRestrictionInfoMessage>
            {
              'Please enter a combination of single-byte alphabetic and numeric characters with a maximum length of 8 to 16 characters.'
            }
          </StyledPasswordRestrictionInfoMessage>
          <Spacer />
          {renderAlert({errorMessage, successMessage})}
          <Spacer />
          <Button
            className="w-100"
            type="submit"
            disabled={disabled}
            style={{
              position: 'relative',
            }}
          >
            {'Register Password'}
            <StyledLoadingIcon>
              {loading ? <Loading /> : null}
            </StyledLoadingIcon>
          </Button>
        </Form>
        <Spacer />
      </StyledChangePassword>
    </Layout>
  );
};

export {ChangePassword};
