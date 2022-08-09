import styled from '@emotion/styled';

const StyledSignInForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SignInForm = ({children}) => {
  return (
    <StyledSignInForm
      onSubmit={(e) => {
        e.preventDefault();
        return false;
      }}
    >
      {children}
    </StyledSignInForm>
  );
};

export {SignInForm};
