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
      <StyledHomePage>
        {'Home'}
        <Link
          className={css`
            display: block;
          `}
          to={'/dashboard'}
        >
          dashboard
        </Link>
        <Link
          className={css`
            display: block;
          `}
          to={'/nothing'}
        >
          not found
        </Link>
      </StyledHomePage>
    </Layout>
  );
};

export {Home};
