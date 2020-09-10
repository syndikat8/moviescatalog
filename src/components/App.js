import React from 'react';
import styles from './App.module.css';
import MovieCatalog from "./MoviesCatalog/MoviesCatalog";
import Header from "./Header/Header";
import Paginator from "./common/Paginator/Paginator";
import SearchInfo from "./SearchInfo/SearchInfo";

const App = () => {
  return (
    <div className={styles.app}>
      <Header/>
      <SearchInfo/>
      <div className={styles.container}>
        <MovieCatalog/>
        <Paginator/>
      </div>
    </div>
  );
}

export default App;
