/* eslint-disable react-hooks/exhaustive-deps */
import { Sorting, Categories, Search, Skeleton, Pagination, PizzaBlock } from "../../component/publicApi";
import { selectFilter, setCurrentPage } from "../../redux/slices/filterSlice";
import { fetchPizzas, selectPizzaData } from "../../redux/slices/pizzaSlice";
import { categories } from "../../component/Categories/Categories";
import { useDispatch, useSelector } from "react-redux";
import { ErrorPage } from "../ErrorPage/ErrorPage";
import { FC, useEffect } from "react";
import styles from "./Home.module.scss";

export const Home: FC = () => {
    const dispatch = useDispatch();

    const { categoryId, currentPage, sort, searchValue } = useSelector(selectFilter);
    const { items, status } = useSelector(selectPizzaData);

    const onChangePage = (page: number) => {
        dispatch(setCurrentPage(page));
    };

    const getPizzas = () => {
        const sortBy = sort.sortProperty.replace("-", "");
        const order = sort.sortProperty.includes("-") ? "desc" : "asc";
        const category = categoryId > 0 ? `category=${categoryId}` : "";
        const search = searchValue ? `&search=${searchValue}` : "";

        dispatch(
            //@ts-ignore
            fetchPizzas({ currentPage, category, sortBy, order, search })
        );

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
                <h2 className={styles.heading}>
                    {categoryId === 0 ? `${categories[categoryId]} пиццы` : categories[categoryId]}
                </h2>
                <Search />
            </div>
            <div className={styles["content-page"]}>
                {status === "error" ? (
                    <ErrorPage />
                ) : (
                    <div className={styles.content}>
                        {status === "loading"
                            ? [...new Array(10)].map((_, index) => <Skeleton key={index} />)
                            : items.map((item: any) => <PizzaBlock key={item.id} {...item} />)}
                    </div>
                )}
            </div>
            <Pagination currentPage={currentPage} onPageChange={onChangePage} />
        </div>
    );
};
