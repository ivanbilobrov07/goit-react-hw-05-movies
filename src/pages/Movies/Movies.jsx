import { useSearchParams } from 'react-router-dom';

import { Container } from 'components/Container.styled';
import { SearchMovie } from 'components/SearchMovies';

const Movies = () => {
  const [searchParams, setQSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const updateQueryString = e => {
    e.preventDefault();
    const inputRef = e.target.elements.query;

    const query = inputRef.value;
    const nextParams = query !== '' ? { query } : {};

    setQSearchParams(nextParams);
    inputRef.value = '';
  };

  return (
    <section>
      <Container>
        <form onSubmit={updateQueryString}>
          <input type="text" name="query" />
          <button type="submit">Search</button>
        </form>
      </Container>
      <SearchMovie query={query} />
    </section>
  );
};

export default Movies;
