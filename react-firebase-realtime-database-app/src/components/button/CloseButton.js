import styled from '@emotion/styled';

const StyledButton = styled.div`
  --width: 40px;
  --height: 40px;
  position: absolute;
  top: 0;
  right: 0;
  width: var(--width);
  height: var(--height);
  background: #0e0d6a;
  &:hover {
    cursor: pointer;
  }
  &::before {
    content: '';
    position: absolute;
    top: calc(var(--height) / 2);
    left: calc((var(--width) / 2) - (var(--width) / 4));
    width: calc(var(--width) / 2);
    height: 2px;
    background: #fff;
    transform: rotate(45deg);
  }
  &::after {
    content: '';
    position: absolute;
    top: calc(var(--height) / 2);
    left: calc((var(--width) / 2) - (var(--width) / 4));
    width: calc(var(--width) / 2);
    height: 2px;
    background: #fff;
    transform: rotate(-45deg);
  }
`;

const CloseButton = ({handleClose}) => {
  return (
    <StyledButton
      onClick={(e) => {
        handleClose(e);
      }}
    ></StyledButton>
  );
};

export {CloseButton};
