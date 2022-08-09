import styled from '@emotion/styled';
import {css} from '@emotion/css';
import {Layout} from '../../layouts/default';
import {Link} from 'react-router-dom';

const StyledDashBoardPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const DashBoard = ({children}) => {
  return (
    <Layout>
      <StyledDashBoardPage>
        {'DashBoard'}
        <Link
          className={css`
            display: block;
          `}
          to={'/'}
        >
          home
        </Link>
      </StyledDashBoardPage>
    </Layout>
  );
};

export {DashBoard};
