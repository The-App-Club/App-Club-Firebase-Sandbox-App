import styled from '@emotion/styled';
import {Typography} from '@mui/material';

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #0b5ed7;
  color: #fff;
  min-height: 62px;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 9;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Typography
        variant="h6"
        alignContent={'center'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        Cowboy Bebop
      </Typography>
    </StyledHeader>
  );
};

export default Header;
