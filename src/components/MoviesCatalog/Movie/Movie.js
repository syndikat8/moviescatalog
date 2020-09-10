import React from 'react';
import styles from './Movie.module.css';
import noPhoto from './../../../assets/noPhoto.png'

const Movie = ({title, poster, year, type, imdbID}) => {
  return (
    <div className={styles.movie}>
      {poster !== "N/A"
        ? <img className={styles.image} src={poster} alt=""/>
        : <img className={styles.image}
               src={noPhoto}
               alt=""/>}
      <div className={styles.wrap}>
        <div className={styles.name}>Name: {title}</div>
        <div className={styles.name}>Year: {year}</div>
        <div className={styles.name}>imdbID: {imdbID}</div>
        <div className={styles.name}>Type: {type}</div>
      </div>
    </div>
  );
}

export default Movie;
