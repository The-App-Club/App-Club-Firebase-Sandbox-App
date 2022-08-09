import styled from '@emotion/styled';

const StyledSignInInputLabel = styled.label`
  width: 100%;
  margin-top: 0.5rem;
`;
const SignInInputLabel = ({children, htmlFor}) => {
  return (
    <StyledSignInInputLabel htmlFor={htmlFor}>
      {children}
    </StyledSignInInputLabel>
  );
};

export {SignInInputLabel};
