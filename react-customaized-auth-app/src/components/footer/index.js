import styled from '@emotion/styled';

const StyledFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledFooterContent = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = ({children}) => {
  return (
    <StyledFooter>
      <StyledFooterContent>{'@copyright Cowboy Bebop'}</StyledFooterContent>
    </StyledFooter>
  );
};

export default Footer;
