import axios from 'axios';

import anonymousProfileAvatar from '../images/profile-anonymous-avatar.jpg';
import anonymousActorAvatar from '../images/actor-anonymous-avatar.jpg';
import noDataPoster from '../images/no-data-poster.jpg';

import { movieAPI } from 'constants';
import { IMAGE_PATH } from 'constants';

const { BASE_URL, API_KEY } = movieAPI;
const option = {
  headers: { Authorization: `Bearer ${API_KEY}` },
};

// In this API there are 2 types of avatar path: "/blEC280vq31MVaDcsWBXuGOsYnB.jpg" and "/https://secure.gravatar.com/avatar/bf3b87ecb40599290d764e6d73c86319.jpg",
// so this functions is used to create from them all a valid one path
export const createValidProfileAvatarPath = path => {
  if (!path) {
    return anonymousProfileAvatar;
  } else if (path.includes('http')) {
    const index = path.indexOf('http');
    return path.slice(index);
  } else {
    return `${IMAGE_PATH}/${path}`;
  }
};

export const createValidActorAvatarPath = path => {
  if (!path) {
    return anonymousActorAvatar;
  } else if (path.includes('http')) {
    const index = path.indexOf('http');
    return path.slice(index);
  } else {
    return `${IMAGE_PATH}/${path}`;
  }
};

export const createValidPosterPath = path => {
  if (!path) {
    return noDataPoster;
  } else {
    return `${IMAGE_PATH}/${path}`;
  }
};

export const fetchTrandingMovies = async (page = 1) => {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?page=${page}`,
    option
  );

  return response.data;
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

export const fetchMovieCastById = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits`,
    option
  );
  return response.data.cast;
};

export const searchMoviesByQuery = async (query, page = 1) => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?query=${query}&page=${page}`,
    option
  );
  return response.data;
};
