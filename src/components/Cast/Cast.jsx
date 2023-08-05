import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieCastById } from 'services';
import { STATUS } from 'constants';

import { Container } from 'components/Container.styled';
import { CastList } from 'components/CastList';
import { Loader } from 'components/Loader';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const [status, setStatus] = useState(STATUS.IDLE);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setStatus(STATUS.PENDING);
      const data = await fetchMovieCastById(movieId);
      setCast(data);
      setStatus(STATUS.FULLFIELD);
    };

    fetchData();
  }, [movieId]);

  if (status === STATUS.FULLFIELD) {
    return (
      <section>
        <Container>
          {cast.length ? <CastList cast={cast} /> : <div>No information</div>}
        </Container>
      </section>
    );
  } else if (status === STATUS.PENDING) {
    return (
      <div style={{ position: 'relative' }}>
        <Loader />
      </div>
    );
  }
};

export default Cast;
