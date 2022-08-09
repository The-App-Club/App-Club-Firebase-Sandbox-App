import styled from '@emotion/styled';

const StyledReplyButton = styled.button`
  display: inline-block;
  position: absolute;
  right: 0;
  bottom: -22px;
`;

const ReplyButton = ({children, handleClick, comment, commentType}) => {
  return (
    <StyledReplyButton
      onClick={(e) => {
        handleClick(e, comment, commentType);
      }}
    >
      {children}
    </StyledReplyButton>
  );
};

export {ReplyButton};
