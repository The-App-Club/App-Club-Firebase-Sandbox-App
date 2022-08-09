import styled from '@emotion/styled';
import {Navigation} from '../navbar';
import {Link} from 'react-router-dom';
import {SignOut} from '../sign-out';

import {useAuth} from '../../contexts/AuthContext';

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: sticky;
  top: 0;
  background: #fff;
  width: 100%;
  z-index: 1;
`;

const StyledHeaderContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyledAccountManageArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
`;

const Header = ({children, style}) => {
  const {currentUser} = useAuth();

  const renderNavigation = ({currentUser}) => {
    if (currentUser) {
      return <Navigation></Navigation>;
    }
    return null;
  };

  const renderAccountManageArea = ({currentUser}) => {
    if (currentUser) {
      return (
        <StyledAccountManageArea>
          <SignOut />
        </StyledAccountManageArea>
      );
    } else {
      return (
        <StyledAccountManageArea>
          <Link to={'/sign-in'}>{'Sign In'}</Link>
          <Link to={'/sign-up'}>{'Sign Up'}</Link>
        </StyledAccountManageArea>
      );
    }
  };
  return (
    <>
      <StyledHeader>
        <StyledHeaderContent>{'CowBoy Bebop'}</StyledHeaderContent>
        {renderAccountManageArea({currentUser})}
      </StyledHeader>
      {renderNavigation({currentUser})}
    </>
  );
};

export {Header};
