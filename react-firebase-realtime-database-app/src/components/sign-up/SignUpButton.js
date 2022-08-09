import styled from '@emotion/styled';

const StyledSignUpButton = styled.button`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignUpButton = ({children, handleSignUp}) => {
  return (
    <StyledSignUpButton onClick={handleSignUp}>{children}</StyledSignUpButton>
  );
};

export {SignUpButton};
