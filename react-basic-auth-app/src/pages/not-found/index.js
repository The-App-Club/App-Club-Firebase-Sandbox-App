import styled from '@emotion/styled';
import {Layout} from '../../layouts/default';

const StyledNotFoundPage = styled.div``;
const NotFound = ({children, style}) => {
  return (
    <Layout>
      <StyledNotFoundPage>{'Not Found'}</StyledNotFoundPage>
    </Layout>
  );
};

export {NotFound};
