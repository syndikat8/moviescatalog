import React from 'react';
import styles from './Search.module.css';
import {useDispatch, useSelector} from "react-redux";
import {searchSuccess} from "../../../redux/reducers/search-reducer";

const Search = () => {
  const {description} = useSelector((store) => store.search)
  const dispatch = useDispatch()

  const onChangeInput = (e) => {
    dispatch(searchSuccess(e.target.value))
  }

  return (
    <div className={styles.search}>
      <input
        onChange={onChangeInput}
        value={description}
        className={styles.input}
        type="text"/>
    </div>
  );
}

export default Search;
