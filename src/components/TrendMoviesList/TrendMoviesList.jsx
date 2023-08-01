import { useState, useEffect } from 'react';

import { fetchTrandingMovies } from 'services';

import { TrendMoviesItem } from 'components/TrendMoviesItem';
import { MovieItem, MovieList } from './TrendMoviesList.styled';

export const TrendMoviesList = () => {
  const [trendMovies, setTrendMovies] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const trendMovies = await fetchTrandingMovies();

      setTrendMovies(trendMovies);
    };

    fetchData();
  }, []);

  return (
    <MovieList>
      {trendMovies?.map(({ title, id, poster_path }) => (
        <MovieItem key={id}>
          <TrendMoviesItem title={title} id={id} poster={poster_path} />
        </MovieItem>
      ))}
    </MovieList>
  );
};
