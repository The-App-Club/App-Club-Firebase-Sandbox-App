import styled from '@emotion/styled';

const StyledForgotPasswordForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ForgotPasswordForm = ({children}) => {
  return <StyledForgotPasswordForm>{children}</StyledForgotPasswordForm>;
};

export {ForgotPasswordForm};
