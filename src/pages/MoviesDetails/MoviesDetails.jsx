import { Link, Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { fetchMovieById } from 'services';
import { STATUS } from 'constants';

import { MovieDetailsCard } from 'components/MovieDetailsCard';
import { Container } from 'components/Container';
import {
  AdditionalInfoList,
  AdditionalInfoTitle,
  AdditionalInfoWrapper,
} from './MoviesDetails.styled';

const MoviesDetails = () => {
  const [status, setStatus] = useState(STATUS.IDLE);
  const [data, setData] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setStatus(STATUS.PENDING);

      const data = await fetchMovieById(movieId);

      setData(data);
      setStatus(STATUS.FULLFIELD);
    };

    fetchData();
  }, [movieId]);

  if (status === STATUS.FULLFIELD) {
    return (
      <>
        <section>
          <Container>
            <MovieDetailsCard data={data} />
            <AdditionalInfoWrapper>
              <AdditionalInfoTitle>Additional information</AdditionalInfoTitle>
              <AdditionalInfoList>
                <li>
                  <Link to="cast">Cast</Link>
                </li>
                <li>
                  <Link to="reviews">Reviews</Link>
                </li>
              </AdditionalInfoList>
            </AdditionalInfoWrapper>
          </Container>
        </section>
        <Outlet />
      </>
    );
  }
};

export default MoviesDetails;
