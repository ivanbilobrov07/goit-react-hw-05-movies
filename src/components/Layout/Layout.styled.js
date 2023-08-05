import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
`;

export const Navigation = styled.nav`
  padding: 0 40px;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const StyledLink = styled(NavLink)`
  display: block;
  padding: 12px 20px;

  &.active {
    color: orange;
  }
`;

export const Main = styled.main`
  padding-top: 50px;
`;
