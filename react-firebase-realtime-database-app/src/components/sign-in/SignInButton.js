import styled from '@emotion/styled';
const StyledSignInButton = styled.button`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SignInButton = ({children, handleSignIn}) => {
  return (
    <StyledSignInButton onClick={handleSignIn}>{children}</StyledSignInButton>
  );
};

export {SignInButton};
