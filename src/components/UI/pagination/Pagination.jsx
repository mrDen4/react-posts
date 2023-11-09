import React from 'react'
import { usePagination } from '../../../hooks/usePagination';
import MyButton from '../button/MyButton';

const Pagination = ({totalPages, page, changePage}) => {
  let pagesArray = usePagination(totalPages);

  return (
    <div>
        {pagesArray.map(p => 
        <MyButton
        onClick={() => changePage(p)}
        key={p}
        className={page === p ? "page-active" : ""}
        >{p}</MyButton>)}
    </div>
  )
}

export default Pagination