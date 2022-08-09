import React, {useRef, useState} from 'react';
import styled from '@emotion/styled';
import {useHistory} from 'react-router-dom';

import {Form, Button, Alert} from 'react-bootstrap';

import {Layout} from '../../layouts/default';
import {Spacer} from '../../components/spacer';

import {Message} from '../../components/message';
import {Loading} from '../../components/loading';

const StyledInputCowboyBebop = styled.div`
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

const StyledInputCowboyBebopHeader = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const StyledInputCowboyBebopPromotionMessage = styled.p``;

const InputCowboyBebop = ({children}) => {
  const cowboyBebopNumberRef = useRef();
  const cowboyBebopNumberConfirmRef = useRef();
  const [disabled, setDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

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

  const checkCowboyBebopNumber = ({CowboyBebopNumber}) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(
          'http://hogehoge.com/check-cowboy-bebop-number',
          {
            method: 'post',
            body: JSON.stringify({CowboyBebopNumber}),
          }
        );
        const json = await response.json();
        resolve(JSON.parse(json));
      } catch (error) {
        reject(error);
      }
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setErrorMessage('');
      setLoading(true);

      const resultCheckCowboyBebopNumber = await checkCowboyBebopNumber({
        cowboyBebopNumber: cowboyBebopNumberRef.current.value,
      });
      console.log('resultCheckCowboyBebopNumber', resultCheckCowboyBebopNumber);

      setTimeout(() => {
        setLoading(false);
        setSuccessMessage('CowboyBebop number registered');
        setTimeout(() => {
          history.push('/next-page');
        }, 1200);
      }, 3000);
    } catch (error) {
      console.log(error);
      setErrorMessage(
        'Either the CowboyBebop number is incorrect or this CowboyBebop number is already registered!'
      );
      setLoading(false);
      setDisabled(true);
    }
  }

  const handleChange = (e, {inputValue}) => {
    const value = cowboyBebopNumberRef.current.value;
    const regex = new RegExp(/^\d{10}$/);
    const isMatch = regex.test(value);
    if (!isMatch) {
      setErrorMessage('Please enter 10 single-byte numbers.');
      setDisabled(true);
      return;
    }
    if (inputValue === 'cowboy-bebop-number-confirm') {
      if (
        cowboyBebopNumberRef.current.value !==
        cowboyBebopNumberConfirmRef.current.value
      ) {
        setErrorMessage(
          'CowboyBebop number and CowboyBebop number (for confirmation) are different'
        );
        setDisabled(true);
        return;
      } else {
        setDisabled(false);
      }
    }
    setErrorMessage('');
  };

  const handleKeyUp = (e) => {};

  const handleBlur = (e) => {};

  return (
    <Layout>
      <StyledInputCowboyBebop>
        <Spacer />
        <StyledInputCowboyBebopHeader>
          {'Verify CowboyBebop number'}
        </StyledInputCowboyBebopHeader>
        <StyledInputCowboyBebopPromotionMessage>
          {
            'Set up your own CowboyBebop number registered with CowboyBebop Club'
          }
        </StyledInputCowboyBebopPromotionMessage>
        <StyledHelpLinkContainer>
          <StyledHelpLink
            href="https://example.com/"
            target="_blank"
            rel="noreferrer"
          >
            {'Click here to find out your CowboyBebop number.'}
          </StyledHelpLink>
        </StyledHelpLinkContainer>
        <Spacer />
        <Form onSubmit={handleSubmit}>
          <Form.Group id="CowboyBebopnumber">
            <Form.Control
              type="CowboyBebopnumber"
              ref={cowboyBebopNumberRef}
              placeholder="CowboyBebop number 10 digits"
              onChange={(e) => {
                handleChange(e, {inputValue: 'cowboy-bebop-number'});
              }}
              onKeyUp={handleKeyUp}
              onBlur={handleBlur}
            />
          </Form.Group>
          <Spacer />
          <Form.Group id="CowboyBebopnumber-confirm">
            <Form.Control
              type="CowboyBebopnumber"
              ref={cowboyBebopNumberConfirmRef}
              placeholder="CowboyBebop number (for confirmation)"
              onChange={(e) => {
                handleChange(e, {inputValue: 'cowboy-bebop-number-confirm'});
              }}
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
            {'move on to the next'}
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
            {'Can\'t register your CowboyBebop number?'}
          </StyledHelpLink>
        </StyledHelpLinkContainer>
      </StyledInputCowboyBebop>
    </Layout>
  );
};

export {InputCowboyBebop};
