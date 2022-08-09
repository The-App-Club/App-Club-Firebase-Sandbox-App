import styled from '@emotion/styled';

const StyledSignUpInputText = styled.input`
  width: 100%;
  margin-top: 1rem;
`;

const SignUpInputText = ({
  children,
  type,
  id,
  name,
  value,
  handleChangeEmail,
  handleChangePassword,
}) => {
  return (
    <StyledSignUpInputText
      type={id === `email` ? `text` : `password`}
      id={id}
      name={name}
      value={value}
      onChange={id === `email` ? handleChangeEmail : handleChangePassword}
    >
      {children}
    </StyledSignUpInputText>
  );
};

export {SignUpInputText};
