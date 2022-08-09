import styled from '@emotion/styled';

const StyledNotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NotFound = ({children}) => {
  return <StyledNotFound>{'NotFound'}</StyledNotFound>;
};

export {NotFound};
