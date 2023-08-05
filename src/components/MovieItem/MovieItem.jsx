import { useLocation } from 'react-router-dom';

import { createValidPosterPath } from 'services';

import { Image, Wrapper, MovieLink, Title } from './MovieItem.styled';

export const MovieItem = ({ id, title, poster }) => {
  const location = useLocation();

  return (
    <MovieLink to={`/movies/${id}`} state={{ from: location }}>
      <Wrapper>
        <Image src={createValidPosterPath(poster)} alt={title} />
      </Wrapper>
      <Title>{title}</Title>
    </MovieLink>
  );
};
