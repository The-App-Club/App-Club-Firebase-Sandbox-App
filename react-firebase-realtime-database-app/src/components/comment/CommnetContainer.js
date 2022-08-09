import styled from '@emotion/styled';

const StyledCommentContainer = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const CommentContainer = ({children}) => {
  return <StyledCommentContainer>{children}</StyledCommentContainer>;
};

export {CommentContainer};
