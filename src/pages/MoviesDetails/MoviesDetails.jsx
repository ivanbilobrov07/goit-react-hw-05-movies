import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect, Suspense, useRef } from 'react';

import { fetchMovieById } from 'services';
import { STATUS } from 'constants';

import { MovieDetailsCard } from 'components/MovieDetailsCard';
import { Container } from 'components/Container.styled';
import { BackLink, List, Title, Wrapper } from './MoviesDetails.styled';
import { Loader } from 'components/Loader';

const MoviesDetails = () => {
  const [status, setStatus] = useState(STATUS.IDLE);
  const [data, setData] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchData = async () => {
      setStatus(STATUS.PENDING);

      const data = await fetchMovieById(movieId);

      setData(data);
      setStatus(STATUS.FULLFIELD);
    };

    fetchData();
  }, [movieId]);

  if (status === STATUS.PENDING) {
    return <Loader />;
  } else if (status === STATUS.FULLFIELD) {
    return (
      <>
        <section>
          <Container>
            <BackLink to={backLinkLocationRef.current}>Back</BackLink>
            <MovieDetailsCard data={data} />
          </Container>
          <Wrapper>
            <Container>
              <Title>Additional information</Title>
              <List>
                <li>
                  <Link to="cast">Cast</Link>
                </li>
                <li>
                  <Link to="reviews">Reviews</Link>
                </li>
              </List>
            </Container>
          </Wrapper>
        </section>
        <Suspense
          fallback={
            <div style={{ position: 'relative' }}>
              <Loader />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </>
    );
  }
};

export default MoviesDetails;
