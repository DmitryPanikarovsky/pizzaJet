/* eslint-disable react-hooks/exhaustive-deps */
import styles from "./Home.module.scss";
import { useContext, useEffect } from "react";
import { SearchContext } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../redux/slices/filterSlice";
import { fetchPizzas } from "../../redux/slices/pizzaSlice";
import { Sorting, Categories, Search, Skeleton, Pagination, PizzaBlock } from "../../component/publicApi";
import { ErrorPage } from "../ErrorPage/ErrorPage";
import { categories } from "../../component/Categories/Categories";

export const Home = () => {
    const dispatch = useDispatch();

    const { categoryId, currentPage, sort } = useSelector((state) => state.filterReducer);
    const pizzas = useSelector((state) => state.pizzaReducer.items);
    const status = useSelector((state) => state.pizzaReducer.status);

    const { searchValue } = useContext(SearchContext);

    const onChangePage = (page) => {
        dispatch(setCurrentPage(page));
    };

    const getPizzas = () => {
        const sortBy = sort.sortProperty.replace("-", "");
        const order = sort.sortProperty.includes("-") ? "desc" : "asc";
        const category = categoryId > 0 ? `category=${categoryId}` : "";
        const search = searchValue ? `&search=${searchValue}` : "";

        dispatch(fetchPizzas({ currentPage, category, sortBy, order, search }));

        window.scrollTo(0, 0);
    };

    useEffect(() => {
        getPizzas();
    }, [categoryId, sort.sortProperty, searchValue, currentPage]);

    return (
        <div className={styles.Home}>
            <div className={styles["content-top"]}>
                <Sorting />
                <Categories />
            </div>
            <div className={styles["content-header"]}>
                <h2 className={styles.heading}>{categories[categoryId]} пиццы</h2>
                <Search />
            </div>
            {status === "error" ? (
                <div className={styles["content-page"]}>
                    <ErrorPage />
                </div>
            ) : (
                <div className={styles["content-page"]}>
                    <div className={styles.content}>
                        {status === "loading"
                            ? [...new Array(10)].map((_, index) => <Skeleton key={index} />)
                            : pizzas.map((item) => <PizzaBlock key={item.id} {...item} />)}
                    </div>
                    <Pagination currentPage={currentPage} onPageChange={onChangePage} />
                </div>
            )}
        </div>
    );
};
