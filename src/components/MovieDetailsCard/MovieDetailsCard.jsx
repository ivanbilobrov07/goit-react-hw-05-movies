import { createValidPosterPath } from 'services';

import {
  GenresList,
  Image,
  Info,
  Name,
  Text,
  Title,
  Wrapper,
} from './MovieDetailsCard.styled';

export const MovieDetailsCard = ({
  data: { genres, title, overview, poster_path, vote_average: rating },
}) => {
  return (
    <Wrapper>
      <Image src={createValidPosterPath(poster_path)} alt={title} />
      <Info>
        <Name>{title}</Name>
        <Text>User rating: {rating}</Text>
        <Title>Overview</Title>
        <Text>{overview}</Text>
        <Title>Genres</Title>
        <GenresList>
          {genres.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </GenresList>
      </Info>
    </Wrapper>
  );
};
