import {useAuth} from '../../contexts/AuthContext';
import styled from '@emotion/styled';
import {Layout} from '../../layouts/please-confirm-receive-mailbox';
import {Spacer} from '../../components/spacer';

const StyledHelpLinkContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const StyledHelpLink = styled.a`
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;

const StyledPleaseConfirmReceiveMailboxPage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
`;

const StyledPleaseConfirmReceiveMailboxPageHeader = styled.h5``;

const StyledPleaseConfirmReceiveMailboxPageContent = styled.div`
  flex: 1 1 auto;
  padding: 1rem 1rem;
`;

const StyledDescription = styled.p``;

const StyledMiniDescription = styled.p`
  font-size: 0.8rem;
`;

const StyledAcceptedApplicationContent = styled.div``;

const StyledAcceptedEmailLabel = styled.strong``;

const StyledAcceptedEmailValue = styled.span``;

const PleaseConfirmReceiveMailbox = ({pageType}) => {
  const {currentUser} = useAuth();

  const renderHeader = () => {
    switch (pageType) {
      case 'forgot-password':
        return `We have sent you an e-mail inviting you to re-register your password. Please check it.`;
      case 'sign-up':
        return `You have successfully registered your e-mail address and password.`;
      default:
        break;
    }
  };

  return (
    <Layout>
      <StyledPleaseConfirmReceiveMailboxPage>
        <StyledPleaseConfirmReceiveMailboxPageContent>
          <StyledPleaseConfirmReceiveMailboxPageHeader>
            {renderHeader()}
          </StyledPleaseConfirmReceiveMailboxPageHeader>
          <Spacer />
          <StyledDescription>
            {
              'We have sent a temporary registration email to the following email address.'
            }
          </StyledDescription>
          <StyledAcceptedApplicationContent>
            <StyledAcceptedEmailLabel>e-mail</StyledAcceptedEmailLabel>
            <StyledAcceptedEmailValue>{` ${currentUser.email}`}</StyledAcceptedEmailValue>
          </StyledAcceptedApplicationContent>
          <Spacer />
          <StyledMiniDescription>
            {
              'If you have not received a temporary registration email after 10 minutes, please check the following.'
            }
          </StyledMiniDescription>
          <StyledMiniDescription>
            {'Is it in your spam folder?'}
          </StyledMiniDescription>
          <StyledHelpLinkContainer>
            <StyledHelpLink
              href="https://example.com"
              target="_blank"
              rel="noreferrer"
            >
              {'If you do not receive an email, click here.'}
            </StyledHelpLink>
          </StyledHelpLinkContainer>
        </StyledPleaseConfirmReceiveMailboxPageContent>
      </StyledPleaseConfirmReceiveMailboxPage>
    </Layout>
  );
};

export {PleaseConfirmReceiveMailbox};
