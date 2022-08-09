import styled from '@emotion/styled';
const StyledForgotPasswordPageHeader = styled.h2`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ForgotPasswordPageHeader = ({children}) => {
  return (
    <StyledForgotPasswordPageHeader>{children}</StyledForgotPasswordPageHeader>
  );
};

export {ForgotPasswordPageHeader};
