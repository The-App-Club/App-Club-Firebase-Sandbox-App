import styled from '@emotion/styled';

const StyledSignUpInputLabel = styled.label`
  width: 100%;
  margin-top: 0.5rem;
`;

const SignUpInputLabel = ({children, htmlFor}) => {
  return (
    <StyledSignUpInputLabel htmlFor={htmlFor}>
      {children}
    </StyledSignUpInputLabel>
  );
};

export {SignUpInputLabel};
