import {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import {Layout} from '../../layouts/modal';
import {ModalMask} from '../modal-mask';
import {CloseButton} from '../button/CloseButton';
import {AddButton} from '../button/AddButton';

const StyledAddPostModal = styled.div`
  width: 400px;
  height: 300px;
  background: #fff;
  margin: 0 auto;
  position: relative;
  top: 10vh;
`;

const StyledAddPostModalHeader = styled.h2`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const AddPostModal = ({}) => {
  const [isShowCommentForm, setIsShowCommentForm] = useState(false);

  // https://stackoverflow.com/questions/9538868/prevent-body-from-scrolling-when-a-modal-is-opened
  // https://stackoverflow.com/questions/3047337/does-overflowhidden-applied-to-body-work-on-iphone-safari
  // https://developer.mozilla.org/ja/docs/Web/CSS/touch-action

  const showCommentForm = (e) => {
    setIsShowCommentForm(true);
    const width = document.body.clientWidth;
    document.body.style.overflow = 'hidden';
    document.body.style.width = `${width}px`;
    document.body.style.touchAction = `none`;
  };

  const hideCommentForm = (e) => {
    setIsShowCommentForm(false);
    document.body.style.overflow = 'visible';
    document.body.style.width = `auto`;
    document.body.style.touchAction = `auto`;
  };

  return (
    <>
      {isShowCommentForm ? (
        <>
          <ModalMask>
            <Layout>
              <StyledAddPostModal>
                <CloseButton handleClose={hideCommentForm}></CloseButton>
                <StyledAddPostModalHeader>
                  {'AddPostModal'}
                </StyledAddPostModalHeader>
              </StyledAddPostModal>
            </Layout>
          </ModalMask>
        </>
      ) : (
        <AddButton handleClick={showCommentForm}></AddButton>
      )}
    </>
  );
};

export {AddPostModal};
