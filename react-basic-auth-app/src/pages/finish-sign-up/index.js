import styled from '@emotion/styled';
import {useRef, useState, useContext} from 'react';
import {useHistory, Redirect, Link} from 'react-router-dom';
import {useAuth, AuthContext} from '../../contexts/AuthContext';

import {Layout} from '../../layouts/default';

const StyledFinishSignUpPage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledFinishSignUpPageHeader = styled.h2`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FinishSignUp = ({children}) => {
  const history = useHistory();
  // https://stackoverflow.com/questions/57854111/what-to-set-as-the-providers-value-in-order-to-change-context-from-a-consumer
  const {currentUser} = useContext(AuthContext);

  console.log('[FinishSignUp]', currentUser);

  // if (currentUser) {
  //   return <Redirect to="/dashboard"></Redirect>;
  // }

  return (
    <Layout>
      <StyledFinishSignUpPage>
        <StyledFinishSignUpPageHeader>
          {'FinishSignUp'}
        </StyledFinishSignUpPageHeader>
      </StyledFinishSignUpPage>
    </Layout>
  );
};

export {FinishSignUp};
