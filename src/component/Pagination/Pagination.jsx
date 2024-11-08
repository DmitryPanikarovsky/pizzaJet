import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

export const Pagination = ({ onPageChange }) => {
    return (
        <ReactPaginate
            className={styles.pagination}
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={event => onPageChange(event.selected + 1)}
            pageRangeDisplayed={8}
            pageCount={2}
            renderOnZeroPageCount={null}
        />
    );
};
