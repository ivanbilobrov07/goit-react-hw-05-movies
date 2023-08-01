import { IMAGE_PATH } from 'constants';

import {
  MovieImage,
  MovieImageWrapper,
  MovieLink,
  MovieTitle,
} from './TrendMoviesItem.styled';

export const TrendMoviesItem = ({ id, title, poster }) => {
  return (
    <MovieLink to={`/movies/${id}`}>
      <MovieImageWrapper>
        <MovieImage src={`${IMAGE_PATH}/${poster}`} alt={title} />
      </MovieImageWrapper>
      <MovieTitle>{title}</MovieTitle>
    </MovieLink>
  );
};
