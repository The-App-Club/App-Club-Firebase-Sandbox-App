import styled from '@emotion/styled';

const StyledCommentContent = styled.div`
  width: 50%;
  white-space: pre-line;
`;

const CommentContent = ({children}) => {
  return <StyledCommentContent>{children}</StyledCommentContent>;
};

export {CommentContent};
