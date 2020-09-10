import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ReactPaginate from "react-paginate";
import styles from './Paginator.module.css';
import {getMovie} from "../../../redux/reducers/movies-reducer";

const Paginator = () => {
  const dispatch = useDispatch()
  const {totalMovies, portionSize, currentPage, isFound} = useSelector((store) => store.movies)
  const {description} = useSelector((store) => store.search)

  const pagesCount = Math.ceil(totalMovies / portionSize)
  const [page, setPage] = useState(currentPage)

  const onPageChanged = (selected) => {
    setPage(selected)
    dispatch(getMovie(selected + 1, description))
  }

  return <>
    {isFound
      ? <ReactPaginate
        forcePage={page}
        previousLabel={"<"}
        nextLabel={'>'}
        breakLabel={'...'}
        pageCount={pagesCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={({selected}) => onPageChanged(selected)}
        containerClassName={styles.pagination}
        activeClassName={styles.active}
        pageClassName={styles.pageItem}
        pageLinkClassName={styles.pageLink}
        previousClassName={styles.pageItem}
        nextClassName={styles.pageItem}
        previousLinkClassName={styles.pageLink}
        nextLinkClassName={styles.pageLink}
      />
      : null
    }
  </>
}

export default Paginator;
