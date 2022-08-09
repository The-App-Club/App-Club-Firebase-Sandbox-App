import styled from '@emotion/styled';
import {Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

import {Layout} from '../../layouts/default';
import {Spacer} from '../../components/spacer';

const StyledCompletePassword = styled.div`
  width: 100%;
`;

const StyledCompletePasswordNotifyMessage = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CompletePassword = ({children}) => {
  const history = useHistory();

  const handleClick = (e) => {
    setTimeout(() => {
      history.push('/login');
    }, 1200);
  };

  return (
    <Layout>
      <StyledCompletePassword>
        <Spacer />
        <StyledCompletePasswordNotifyMessage>
          {'You have successfully registered your new password'}
        </StyledCompletePasswordNotifyMessage>
        <Spacer />
        <Button className="w-100" onClick={handleClick}>
          {'Go to login page'}
        </Button>
      </StyledCompletePassword>
    </Layout>
  );
};

export {CompletePassword};
