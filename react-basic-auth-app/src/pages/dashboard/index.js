import styled from '@emotion/styled';
import {Layout} from '../../layouts/default';
import {Redirect} from 'react-router-dom';
import {useAuth} from '../../contexts/AuthContext';
import {SignOut} from '../sign-out';

const StyledDashBoardPage = styled.div``;

const DashBoard = ({children}) => {
  const a = useAuth();
  console.log(a);

  return (
    <Layout>
      <SignOut></SignOut>
      <StyledDashBoardPage>DashBoard</StyledDashBoardPage>
    </Layout>
  );
};

export {DashBoard};
