import { Route, Routes } from 'react-router-dom';

import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MoviesDetails from 'pages/MoviesDetails';

import { Layout } from 'components/Layout';
import Cast from 'components/Cast';
import Reviews from 'components/Reviews';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
