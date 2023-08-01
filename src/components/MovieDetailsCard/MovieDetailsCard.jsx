import { IMAGE_PATH } from 'constants';

import {
  MovieCardGenres,
  MovieCardImage,
  MovieCardInfo,
  MovieCardName,
  MovieCardText,
  MovieCardTitle,
  MovieCardWrapper,
} from './MovieDetailsCard.styled';

export const MovieDetailsCard = ({
  data: { genres, title, overview, poster_path, vote_average: rating },
}) => {
  return (
    <MovieCardWrapper>
      <MovieCardImage src={`${IMAGE_PATH}/${poster_path}`} alt={title} />
      <MovieCardInfo>
        <MovieCardName>{title}</MovieCardName>
        <MovieCardText>User rating: {rating}</MovieCardText>
        <MovieCardTitle>Overview</MovieCardTitle>
        <MovieCardText>{overview}</MovieCardText>
        <MovieCardTitle>Genres</MovieCardTitle>
        <MovieCardGenres>
          {genres.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </MovieCardGenres>
      </MovieCardInfo>
    </MovieCardWrapper>
  );
};
