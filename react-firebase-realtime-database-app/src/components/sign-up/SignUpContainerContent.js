import styled from '@emotion/styled';

const StyledSignUpContainerContent = styled.div`
  width: 100%;
`;

const SignUpContainerContent = ({children}) => {
  return (
    <StyledSignUpContainerContent>{children}</StyledSignUpContainerContent>
  );
};

export {SignUpContainerContent};
