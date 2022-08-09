import styled from '@emotion/styled';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Footer = ({children, style}) => {
  return <StyledFooter>{'@Copyright CowBoy Bebop'}</StyledFooter>;
};

export {Footer};
