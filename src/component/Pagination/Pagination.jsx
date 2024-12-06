import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

export const Pagination = ({ currentPage, onPageChange }) => {
    return (
        <ReactPaginate
            className={styles.pagination}
            breakLabel="..."
            nextLabel="&rArr;"
            previousLabel="&lArr;"
            onPageChange={(event) => onPageChange(event.selected + 1)}
            pageRangeDisplayed={4}
            pageCount={6}
            forcePage={currentPage - 1}
            renderOnZeroPageCount={null}
        />
    );
};
