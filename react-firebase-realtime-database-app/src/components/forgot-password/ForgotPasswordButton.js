import styled from '@emotion/styled';

const StyledForgotPasswordButton = styled.button`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ForgotPasswordButton = ({children, handleResetPassword}) => {
  return (
    <StyledForgotPasswordButton onClick={handleResetPassword}>
      {children}
    </StyledForgotPasswordButton>
  );
};

export {ForgotPasswordButton};
