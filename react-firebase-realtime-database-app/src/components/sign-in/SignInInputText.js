import styled from '@emotion/styled';

const StyledSignInInputText = styled.input`
  width: 100%;
  margin-top: 1rem;
`;

const SignInInputText = ({
  children,
  type,
  id,
  name,
  value,
  handleChangeEmail,
  handleChangePassword,
}) => {
  return (
    <StyledSignInInputText
      type={id === `email` ? `text` : `password`}
      id={id}
      name={name}
      value={value}
      onChange={id === `email` ? handleChangeEmail : handleChangePassword}
    >
      {children}
    </StyledSignInInputText>
  );
};

export {SignInInputText};
