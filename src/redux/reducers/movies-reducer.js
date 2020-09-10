import {moviesApi} from "../../api/api";

export const GET_MOVIES = 'filmscatalog/movies/GET_MOVIES';
export const IS_LOADING = 'filmscatalog/movies/IS_LOADING';
export const IS_FOUND = 'filmscatalog/movies/IS_FOUND';

const initialState = {
  movies: [],
  totalMovies: null,
  isLoading: false,
  initialPage: 1,
  currentPage: 0,
  portionSize: 10,
  isFound: true
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES: {
      return {
        ...state,
        movies: action.movies,
        totalMovies: action.totalMovies,
        currentPage: action.currentPage
      };
    }

    case IS_LOADING: {
      return {
        ...state,
        isLoading: action.isLoading,
      };
    }

    case IS_FOUND: {
      return {
        ...state,
        isFound: action.isFound
      };
    }
    default:
      return state;
  }
};

const getMoviesSuccess = (movies, totalMovies, currentPage) => ({type: GET_MOVIES, movies, totalMovies, currentPage});
const toggleIsLoading = (isLoading) => ({type: IS_LOADING, isLoading});
const toggleIsFound = (isFound) => ({type: IS_FOUND, isFound});

export const getMovie = (currentPage, name) => async (dispatch) => {
  dispatch(toggleIsLoading(true));
  const response = await moviesApi.getMovies(currentPage, name)
  if (response.data.Response === "True") {
    dispatch(getMoviesSuccess(response.data.Search, response.data.totalResults, currentPage));
    dispatch(toggleIsFound(true))
  } else  {
    dispatch(toggleIsFound(false))
  }
  dispatch(toggleIsLoading(false));
};

export default movies;
