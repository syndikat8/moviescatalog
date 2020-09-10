import React, {useEffect} from 'react';
import styles from './MoviesCatalog.module.css';
import {useDispatch, useSelector} from "react-redux";
import {getMovie} from "../../redux/reducers/movies-reducer";
import Movie from "./Movie/Movie";
import Preloader from "../common/Preloader/Preloder";
import unnamed from "../../assets/unnamed.png"

const MovieCatalog = () => {

  const {movies, isLoading, initialPage, isFound} = useSelector((store) => store.movies)
  const {description} = useSelector((store) => store.search)
  const dispatch = useDispatch()

  useEffect(() => {
    if(description !== "") {
      dispatch(getMovie(initialPage, description));
    }
  }, [dispatch, description, initialPage]);

  const movie = movies && movies.map(m => <Movie
    key={m.imdbID}
    title={m.Title}
    poster={m.Poster}
    year={m.Year}
    type={m.Type}
    imdbID={m.imdbID}
  />)
  return (
    <>
      {isLoading
        ? <Preloader/>
        : <>
          {isFound
            ? <div className={styles.moviesCatalog}>
              {movie}
            </div>
            : <img className={styles.image} src={unnamed} alt=""/>

          }
        </>
      }
    </>
  );
}

export default MovieCatalog;
