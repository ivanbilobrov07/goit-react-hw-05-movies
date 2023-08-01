import axios from 'axios';

import { movieAPI } from 'constants';

const { BASE_URL, API_KEY } = movieAPI;
const option = {
  headers: { Authorization: `Bearer ${API_KEY}` },
};

export const fetchTrandingMovies = async () => {
  const response = await axios.get(`${BASE_URL}/trending/movie/day`, option);
  return response.data.results;
};

export const fetchMovieById = async movieId => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}`, option);
  return response.data;
};

export const fetchMovieReviewsById = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews`,
    option
  );
  return response.data.results;
};
