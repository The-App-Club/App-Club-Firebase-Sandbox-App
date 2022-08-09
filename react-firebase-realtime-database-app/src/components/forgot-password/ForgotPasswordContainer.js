import styled from '@emotion/styled';
const StyledForgotPasswordContainer = styled.div`
  width: 100%;
  max-width: 300px;
  border: 3px solid #000;
`;
const ForgotPasswordContainer = ({children}) => {
  return (
    <StyledForgotPasswordContainer>{children}</StyledForgotPasswordContainer>
  );
};

export {ForgotPasswordContainer};
