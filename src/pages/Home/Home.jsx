/* eslint-disable react-hooks/exhaustive-deps */
import styles from "./Home.module.scss";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../redux/slices/filterSlice";
import { Sorting, Categories, Search, Skeleton, Pagination, PizzaBlock } from "../../component/publicApi";

export const Home = () => {
    const { categoryId, currentPage, sort } = useSelector((state) => state.filterReducer);

    const dispatch = useDispatch();

    const { searchValue } = useContext(SearchContext);
    const [pizzas, setPizzas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const onChangePage = (page) => {
        dispatch(setCurrentPage(page));
    };

    // useEffect(() => {
    //     if (window.location.search) {
    //         const params = qs.parse(window.location.search.substring(1));
    //         const sort = sortItem.find((obj) => obj.sortProperty === params.sortProperty);

    //         dispatch(setFilters({
    //             ...params, 
    //             sort
    //         }));
    //     }
    // }, []);

    useEffect(() => {
        setIsLoading(true);

        const sortBy = sort.sortProperty.replace("-", "");
        const order = sort.sortProperty.includes("-") ? "desc" : "asc";
        const category = categoryId > 0 ? `category=${categoryId}` : "";
        const search = searchValue ? `&search=${searchValue}` : "";

        const data = `?page=${currentPage}&limit=10&${category}&sortBy=${sortBy}&order=${order}${search}`;

        axios.get(`https://66f2d5e071c84d805876ef77.mockapi.io/pizzas${data}`).then((response) => {
            setPizzas(response.data);
            setIsLoading(false);
        });
        window.scrollTo(0, 0);
    }, [categoryId, sort.sortProperty, searchValue, currentPage]);

    // useEffect(() => {
    //     const queryString = qs.stringify({
    //         sortProperty: sort.sortProperty,
    //         categoryId,
    //         currentPage,
    //     });
    //     navigate(`?${queryString}`);
    // }, [categoryId, sort.sortProperty, searchValue, currentPage]);

    return (
        <div className={styles.Home}>
            <div className={styles["content-top"]}>
                <Sorting />
                <Categories />
            </div>
            <div className={styles["content-header"]}>
                <h2 className={styles.heading}>Все пиццы</h2>
                <Search />
            </div>
            <div className={styles["content-page"]}>
                <div className={styles.content}>
                    {isLoading
                        ? [...new Array(10)].map((_, index) => <Skeleton key={index} />)
                        : pizzas.map((item) => <PizzaBlock key={item.id} {...item} />)}
                </div>
                <Pagination currentPage={currentPage} onPageChange={onChangePage} />
            </div>
        </div>
    );
};
