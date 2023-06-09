import axios from 'axios';

const API_KEY = '2b204635b1bab7df660e08a06b148a8e';
const API_URL = 'https://api.themoviedb.org/3/';

const time_window = 'day';

export const fetchAllMovies = async () => {
  const { data } = await axios.get(
    `${API_URL}trending/movie/${time_window}?api_key=${API_KEY}&page=1`
  );
  return data;
};

export const fetchMovieDetails = async movieId => {
  const response = await axios.get(
    `${API_URL}movie/${movieId}?api_key=${API_KEY}`
  );
  return response.data;
};

export const fetchCast = async movieId => {
  const response = await axios.get(
    `${API_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return response.data;
};

export const fetchReviews = async movieId => {
  const response = await axios.get(
    `${API_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return response.data
}

export const fetchQuery = async query => {
  const response = await axios.get(
    `${API_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=1&include_adult=false`
  );
  return response.data
}
