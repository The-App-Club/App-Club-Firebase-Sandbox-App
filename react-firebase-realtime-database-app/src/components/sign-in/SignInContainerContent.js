import styled from '@emotion/styled';

const StyledSignInContainerContent = styled.div`
  width: 100%;
`;
const SignInContainerContent = ({children}) => {
  return (
    <StyledSignInContainerContent>{children}</StyledSignInContainerContent>
  );
};

export {SignInContainerContent};
