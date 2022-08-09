import styled from '@emotion/styled';

const StyledSignUpPage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SignUpPage = ({children}) => {
  return <StyledSignUpPage>{children}</StyledSignUpPage>;
};

export {SignUpPage};
