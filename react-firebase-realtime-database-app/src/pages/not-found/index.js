import styled from '@emotion/styled';
import {css} from '@emotion/css';
import {Layout} from '../../layouts/default';
import {Link} from 'react-router-dom';

const StyledNotFoundPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const NotFound = ({children}) => {
  return (
    <Layout>
      <StyledNotFoundPage>
        {'NotFound'}
        <Link
          className={css`
            display: block;
          `}
          to={'/'}
        >
          home
        </Link>
      </StyledNotFoundPage>
    </Layout>
  );
};

export {NotFound};
