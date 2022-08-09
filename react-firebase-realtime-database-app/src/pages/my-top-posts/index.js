import styled from '@emotion/styled';
import {css} from '@emotion/css';
import {Layout} from '../../layouts/default';
import {Link} from 'react-router-dom';
import {AddPostModal} from '../../components/modal/AddPostModal';

const StyledMyTopPostsPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MyTopPosts = ({children}) => {
  return (
    <>
      <Layout>
        <StyledMyTopPostsPage>{'MyTopPosts'} </StyledMyTopPostsPage>
      </Layout>
      <AddPostModal></AddPostModal>
    </>
  );
};

export {MyTopPosts};
