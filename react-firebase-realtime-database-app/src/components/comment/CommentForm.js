import styled from '@emotion/styled';

const StyledCommentForm = styled.form`
  position: relative;
  width: 50%;
`;

const CommentForm = ({children}) => {
  return (
    <StyledCommentForm
      onSubmit={(e) => {
        e.preventDefault();
        return false;
      }}
    >
      {children}
    </StyledCommentForm>
  );
};

export {CommentForm};
