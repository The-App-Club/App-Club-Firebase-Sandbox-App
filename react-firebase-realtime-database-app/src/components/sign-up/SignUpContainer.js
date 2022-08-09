import styled from '@emotion/styled';

const StyledSignUpContainer = styled.div`
  width: 100%;
  max-width: 300px;
  border: 3px solid #000;
`;

const SignUpContainer = ({children}) => {
  return <StyledSignUpContainer>{children}</StyledSignUpContainer>;
};

export {SignUpContainer};
