import styled from '@emotion/styled';

const StyledForgotPasswordPage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ForgotPasswordPage = ({children}) => {
  return <StyledForgotPasswordPage>{children}</StyledForgotPasswordPage>;
};

export {ForgotPasswordPage};
