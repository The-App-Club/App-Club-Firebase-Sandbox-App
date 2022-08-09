import styled from '@emotion/styled';

const StyledSpacer = styled.br``;

const Spacer = ({children, className, style}) => {
  return (
    <StyledSpacer className={className} style={{...style}}>
      {children}
    </StyledSpacer>
  );
};

const StyledSignUpHeader = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const SignUpHeader = ({children, className, style}) => {
  return (
    <StyledSignUpHeader className={className} style={{...style}}>
      {children}
    </StyledSignUpHeader>
  );
};

const StyledSignUpPromotionMessage = styled.p``;

const SignUpPromotionMessage = ({children, className, style}) => {
  return (
    <StyledSignUpPromotionMessage className={className} style={{...style}}>
      {children}
    </StyledSignUpPromotionMessage>
  );
};

const StyledPasswordRestrictionInfoMessage = styled.p`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 0.8rem;
  padding-top: 3px;
`;

const PasswordRestrictionInfoMessage = ({children, className, style}) => {
  return (
    <StyledPasswordRestrictionInfoMessage
      className={className}
      style={{...style}}
    >
      {children}
    </StyledPasswordRestrictionInfoMessage>
  );
};

export {
  Spacer,
  SignUpHeader,
  SignUpPromotionMessage,
  PasswordRestrictionInfoMessage,
};
