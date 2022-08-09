import styled from '@emotion/styled';

const StyledAddButton = styled.button`
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: #000;
  background: orange;
  position: fixed;
  bottom: 10px;
  right: 10px;
  border: none;
  z-index: 1;
  &:hover {
    cursor: pointer;
  }
`;

const AddButton = ({handleClick}) => {
  return <StyledAddButton onClick={handleClick}>{'Add Post'}</StyledAddButton>;
};

export {AddButton};
