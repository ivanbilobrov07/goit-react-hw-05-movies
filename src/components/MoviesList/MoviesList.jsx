import { MovieItem } from 'components/MovieItem';
import { Item, List } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  return (
    <List>
      {movies.map(({ title, id, poster_path }) => {
        return (
          <Item key={id}>
            <MovieItem title={title} id={id} poster={poster_path} />
          </Item>
        );
      })}
    </List>
  );
};
