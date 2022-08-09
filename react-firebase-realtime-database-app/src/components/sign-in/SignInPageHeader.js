import styled from '@emotion/styled';

const StyledSignInPageHeader = styled.h2`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignInPageHeader = ({children}) => {
  return <StyledSignInPageHeader>{children}</StyledSignInPageHeader>;
};

export {SignInPageHeader};
