import React from 'react';
import styles from './Header.module.css';
import Search from "../common/Search/Search";
import Login from "../Login/Login";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.title}>Movie Catalog</div>
        <Search/>
        <Login/>
      </div>
    </div>
  );
}

export default Header;
