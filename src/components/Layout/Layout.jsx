import { Outlet } from 'react-router-dom';

import {
  Header,
  Main,
  Navigation,
  NavigationList,
  StyledLink,
} from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <div className="container">
          <Navigation>
            <NavigationList>
              <li>
                <StyledLink to="/">Home</StyledLink>
              </li>
              <li>
                <StyledLink to="/movies">Movies</StyledLink>
              </li>
            </NavigationList>
          </Navigation>
        </div>
      </Header>
      <Main>
        <Outlet />
      </Main>
    </>
  );
};
