import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Header, Main, Navigation, List, StyledLink } from './Layout.styled';
import { Container } from 'components/Container.styled';
import { Loader } from 'components/Loader';

export const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <Navigation>
            <List>
              <li>
                <StyledLink to="/">Home</StyledLink>
              </li>
              <li>
                <StyledLink to="/movies">Movies</StyledLink>
              </li>
            </List>
          </Navigation>
        </Container>
      </Header>
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};
