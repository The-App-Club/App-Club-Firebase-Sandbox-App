import styled from '@emotion/styled';

const StyledSpacer = styled.br``;

const Spacer = ({children, className, style}) => {
  return (
    <StyledSpacer className={className} style={{...style}}>
      {children}
    </StyledSpacer>
  );
};

export {Spacer};
