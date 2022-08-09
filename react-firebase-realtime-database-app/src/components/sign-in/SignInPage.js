import styled from '@emotion/styled';

const StyledSignInPage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SignInPage = ({children}) => {
  return <StyledSignInPage>{children}</StyledSignInPage>;
};

export {SignInPage};
