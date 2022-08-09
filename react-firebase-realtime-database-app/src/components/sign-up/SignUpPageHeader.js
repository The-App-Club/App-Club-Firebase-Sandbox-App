import styled from '@emotion/styled';

const StyledSignUpPageHeader = styled.h2`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignUpPageHeader = ({children}) => {
  return <StyledSignUpPageHeader>{children}</StyledSignUpPageHeader>;
};

export {SignUpPageHeader};
