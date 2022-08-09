import styled from '@emotion/styled';

const StyledSignUpForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SignUpForm = ({children}) => {
  return <StyledSignUpForm>{children}</StyledSignUpForm>;
};

export {SignUpForm};
