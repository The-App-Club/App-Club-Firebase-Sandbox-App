import styled from '@emotion/styled';

const StyledForgotPasswordInputText = styled.input`
  width: 100%;
  margin-top: 1rem;
`;

const ForgotPasswordInputText = ({
  children,
  type,
  id,
  name,
  value,
  handleChangeEmail,
}) => {
  return (
    <StyledForgotPasswordInputText
      type={`text`}
      id={id}
      name={name}
      value={value}
      onChange={handleChangeEmail}
    >
      {children}
    </StyledForgotPasswordInputText>
  );
};

export {ForgotPasswordInputText};
