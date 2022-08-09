import styled from '@emotion/styled';
import dayjs from 'dayjs';
import {useEffect} from 'react';
import {updateCommentData, getCommentData} from '../../plugins/database';

const StyledMetricsButton = styled.button`
  display: inline-block;
`;

const MetricsButton = ({
  children,
  metricsType,
  downVote,
  upVote,
  handleClick,
  comment,
}) => {
  if (metricsType === 'upVote') {
    useEffect(() => {
      (async () => {
        Object.assign(comment, {upVote});
        Object.assign(comment, {
          updatedTime: dayjs().format('YYYY-MM-DDTHH:mm:ss'),
        });
        const editComment = {
          id: comment.id,
          parentId: comment.parentId,
          text: comment.text,
          author: comment.author,
          expanded: comment.expanded,
          createdTime: comment.createdTime,
          updatedTime: comment.updatedTime,
          upVote: comment.upVote,
          downVote: comment.downVote,
        };
        const resultGetCommentData = await getCommentData({
          commentId: comment.id,
        });
        const resultUpdateData = await updateCommentData({
          key: resultGetCommentData.data.key,
          updateInfo: editComment,
        });
      })();
    }, [upVote, downVote]);
    return (
      <StyledMetricsButton
        onClick={(e) => {
          handleClick(e, comment);
        }}
      >
        {children}
      </StyledMetricsButton>
    );
  } else if (metricsType === 'downVote') {
    useEffect(() => {
      (async () => {
        Object.assign(comment, {downVote});
        Object.assign(comment, {
          updatedTime: dayjs().format('YYYY-MM-DDTHH:mm:ss'),
        });
        const editComment = {
          id: comment.id,
          parentId: comment.parentId,
          text: comment.text,
          author: comment.author,
          expanded: comment.expanded,
          createdTime: comment.createdTime,
          updatedTime: comment.updatedTime,
          upVote: comment.upVote,
          downVote: comment.downVote,
        };
        const resultGetCommentData = await getCommentData({
          commentId: comment.id,
        });
        const resultUpdateData = await updateCommentData({
          key: resultGetCommentData.data.key,
          updateInfo: editComment,
        });
      })();
    }, [upVote, downVote]);
    return (
      <StyledMetricsButton
        onClick={(e) => {
          handleClick(e, comment);
        }}
      >
        {children}
      </StyledMetricsButton>
    );
  } else {
    null;
  }
  return (
    <StyledMetricsButton
      onClick={(e) => {
        handleClick(e, comment);
      }}
    >
      {children}
    </StyledMetricsButton>
  );
};

export {MetricsButton};
