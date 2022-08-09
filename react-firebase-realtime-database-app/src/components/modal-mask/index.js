import styled from '@emotion/styled';

// https://css-tricks.com/almanac/properties/b/backdrop-filter/
const StyledModalMask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const ModalMask = ({children, style}) => {
  return <StyledModalMask style={{...style}}>{children}</StyledModalMask>;
};

export {ModalMask};
