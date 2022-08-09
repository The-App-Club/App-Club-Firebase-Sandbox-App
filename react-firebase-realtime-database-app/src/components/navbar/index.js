import {css} from '@emotion/css';
import styled from '@emotion/styled';
import {Link} from 'react-router-dom';

const StyledNavigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledNavItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Navigation = ({children}) => {
  return (
    <StyledNavigation>
      <StyledNavItem>
        <Link
          className={css`
            display: block;
          `}
          to={'/recent'}
        >
          {'Recent'}
        </Link>
      </StyledNavItem>
      <StyledNavItem>
        <Link
          className={css`
            display: block;
          `}
          to={'/my-posts'}
        >
          {'My Posts'}
        </Link>
      </StyledNavItem>
      <StyledNavItem>
        <Link
          className={css`
            display: block;
          `}
          to={'/my-top-posts'}
        >
          {'My Top Posts'}
        </Link>
      </StyledNavItem>
    </StyledNavigation>
  );
};

export {Navigation};
