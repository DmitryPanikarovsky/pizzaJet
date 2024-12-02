/* eslint-disable react-hooks/exhaustive-deps */
import styles from "./Home.module.scss";
import axios from "axios";
import qs from "qs";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../redux/slices/filterSlice";
import { useNavigate } from "react-router-dom";
import { Sorting, Categories, Search, Skeleton, Pagination, PizzaBlock } from "../../component/publicApi";

export const Home = () => {
    const { categoryId, currentPage, sortType } = useSelector((state) => state.filterReducer);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { searchValue } = useContext(SearchContext);
    const [pizzas, setPizzas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [open, setOpen] = useState(false);

    const onChangePage = (page) => {
        dispatch(setCurrentPage(page));
    };

    useEffect(() => {
        setIsLoading(true);

        const sortBy = sortType.properties.replace("-", "");
        const order = sortType.properties.includes("-") ? "desc" : "asc";
        const category = categoryId > 0 ? `category=${categoryId}` : "";
        const search = searchValue ? `&search=${searchValue}` : "";

        axios
            .get(
                `https://66f2d5e071c84d805876ef77.mockapi.io/pizzas?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
            )
            .then((response) => {
                setPizzas(response.data);
                setIsLoading(false);
            });
        window.scrollTo(0, 0);
    }, [categoryId, sortType.properties, searchValue, currentPage]);

    useEffect(() => {
        const queryString = qs.stringify({
            properties: sortType.properties,
            categoryId,
            currentPage,
        });
        navigate(`?${queryString}`);
    }, [categoryId, currentPage, sortType.properties]);

    return (
        <div className={styles.Home} onClick={() => setOpen(false)}>
            <div className={styles["content-top"]} onClick={(e) => e.stopPropagation()}>
                <Sorting openPopup={open} setOpenPopup={() => setOpen(!open)} />
                <Categories />
            </div>
            <div className={styles["content-header"]}>
                <h2 className={styles.heading}>Все пиццы</h2>
                <Search />
            </div>
            <div className={styles["content-page"]}>
                <div className={styles.content}>
                    {isLoading
                        ? [...new Array(4)].map((_, index) => <Skeleton key={index} />)
                        : pizzas.map((item) => <PizzaBlock key={item.id} {...item} />)}
                </div>
                <Pagination currentPage={currentPage} onPageChange={onChangePage} />
            </div>
        </div>
    );
};
