import styled from '@emotion/styled';

const StyledForgotPasswordContainerContent = styled.div`
  width: 100%;
`;
const ForgotPasswordContainerContent = ({children}) => {
  return (
    <StyledForgotPasswordContainerContent>
      {children}
    </StyledForgotPasswordContainerContent>
  );
};

export {ForgotPasswordContainerContent};
