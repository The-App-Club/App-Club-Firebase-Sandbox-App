import {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import dayjs from 'dayjs';
import {css} from '@emotion/css';
import {Layout} from '../../layouts/default';
import {Link} from 'react-router-dom';
import {AddPostModal} from '../../components/modal/AddPostModal';

import {CommentContainer} from '../../components/comment/CommnetContainer';
import {Comment} from '../../components/comment/Comment';
import {createTree} from '../../plugins/tree';

import {
  getCommentDataList,
  updateCommentData,
  getCommentData,
} from '../../plugins/database';

import {useQuery, useQueryClient} from 'react-query';

const StyledRecentPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Recent = ({children}) => {
  const queryClient = useQueryClient();
  const [intervalMs, setIntervalMs] = useState(100);
  const [value, setValue] = useState('');

  const {status, data, error, isFetching} = useQuery(
    'comments',
    async () => {
      const response = await getCommentDataList({});
      if (response.status === 0) {
        return response.data;
      } else {
        return [];
      }
    },
    {
      // Refetch the data every second
      refetchInterval: intervalMs,
    }
  );

  const [comments, setComments] = useState([]);
  const [commentTree, setCommentTree] = useState(createTree(comments));

  useEffect(() => {
    setComments(data ? data : []);
    setCommentTree(createTree(data ? data : []));
  }, [data]);

  const handleCommentCollapse = async (id) => {
    const updatedComment = data.find((updatedComment) => {
      return updatedComment.id === id;
    });
    const editComment = {
      id: updatedComment.id,
      parentId: updatedComment.parentId,
      text: updatedComment.text,
      author: updatedComment.author,
      expanded: !updatedComment.expanded,
      createdTime: updatedComment.createdTime,
      updatedTime: dayjs().format('YYYY-MM-DDTHH:mm:ss'),
      upVote: updatedComment.upVote,
      downVote: updatedComment.downVote,
    };
    const resultGetCommentData = await getCommentData({
      commentId: updatedComment.id,
    });
    const resultUpdateData = await updateCommentData({
      key: resultGetCommentData.data.key,
      updateInfo: editComment,
    });
    const response = await getCommentDataList({});
    if (response.status === 0) {
      setComments(response.data);
    }
  };

  return (
    <>
      <Layout>
        <StyledRecentPage>{'Recent'} </StyledRecentPage>
        <CommentContainer>
          {commentTree.map((comment, index) => {
            return (
              <Comment
                key={comment.id}
                comment={comment}
                comments={data}
                collapse={handleCommentCollapse}
                setComments={setComments}
                setCommentTree={setCommentTree}
              />
            );
          })}
        </CommentContainer>
      </Layout>
      <AddPostModal></AddPostModal>
    </>
  );
};

export {Recent};
