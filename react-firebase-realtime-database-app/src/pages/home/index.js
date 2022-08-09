import styled from '@emotion/styled';
import {css} from '@emotion/css';
import {Layout} from '../../layouts/default';
import {Link} from 'react-router-dom';

const StyledHomePage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Home = ({children}) => {
  return (
    <Layout>
      <StyledHomePage>{'Home'}</StyledHomePage>
    </Layout>
  );
};

export {Home};
