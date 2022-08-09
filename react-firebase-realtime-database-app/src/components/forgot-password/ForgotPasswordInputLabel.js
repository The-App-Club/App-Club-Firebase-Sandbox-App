import styled from '@emotion/styled';

const StyledForgotPasswordInputLabel = styled.label`
  width: 100%;
  margin-top: 0.5rem;
`;

const ForgotPasswordInputLabel = ({children, htmlFor}) => {
  return (
    <StyledForgotPasswordInputLabel htmlFor={htmlFor}>
      {children}
    </StyledForgotPasswordInputLabel>
  );
};

export {ForgotPasswordInputLabel};
