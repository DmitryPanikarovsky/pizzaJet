import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";
import { FC } from 'react'

type PaginationProps = {
    currentPage: number;
    onPageChange: (page: number) => void;
};

export const Pagination: FC<PaginationProps> = ({ currentPage, onPageChange }) => 
    <ReactPaginate
        className={styles.pagination}
        breakLabel="..."
        nextLabel="&rArr;"
        previousLabel="&lArr;"
        onPageChange={(event) => onPageChange(event.selected + 1)}
        pageRangeDisplayed={10}
        pageCount={3}
        forcePage={currentPage - 1}
    />
;
