import styled from '@emotion/styled';

const StyledSignInContainer = styled.div`
  width: 100%;
  max-width: 300px;
  border: 3px solid #000;
`;

const SignInContainer = ({children}) => {
  return <StyledSignInContainer>{children}</StyledSignInContainer>;
};

export {SignInContainer};
