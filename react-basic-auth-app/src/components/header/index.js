import styled from '@emotion/styled';

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Header = ({children, style}) => {
  return <StyledHeader>{'CowBoy Bebop'}</StyledHeader>;
};

export {Header};
