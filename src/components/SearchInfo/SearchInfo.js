import React from 'react';
import styles from './SearchInfo.module.css';
import {useSelector} from "react-redux";

const SearchInfo = () => {
  const {totalMovies, isFound} = useSelector((store) => store.movies)
  const {description} = useSelector((store) => store.search)
  return (
    <>
      {isFound
        ? <div className={styles.searchInfo}>
          <div className={styles.searchInfoElement}>You searched for:</div>
          <div className={styles.searchInfoElement}>{description},</div>
          <div className={styles.searchInfoElement}>{totalMovies} results found</div>
        </div>
        : null
      }
    </>
  )
}

export default SearchInfo;
