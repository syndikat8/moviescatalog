import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.omdbapi.com',
});

export const moviesApi = {
  getMovies(currentPage, name) {
    return instance.get(`/?i=tt3896198&apikey=8523cbb8&s=${name}&page=${currentPage}`);
  },
};
