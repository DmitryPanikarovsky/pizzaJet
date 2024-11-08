import styles from "./Home.module.scss";

import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { setPageCount } from "../../redux/slices/filterSlice";

import { Sorting } from "../../component/Sorting/Sorting";
import { Categories } from "../../component/Categories/Categories";
import { Skeleton } from "../../component/PizzaBlock/Skeleton";
import { PizzaBlock } from "../../component/PizzaBlock/PizzaBlock";
import { Pagination } from "../../component/Pagination/Pagination";

export const Home = () => {
    const { categoryId, sortType, pageCount } = useSelector((state) => state.filterReducer);
    const dispatch = useDispatch();

    const { searchValue } = useContext(SearchContext);
    const [pizzas, setPizzas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [open, setOpen] = useState(false);

    const onChangePage = (number) => {
        dispatch(setPageCount(number));
    };

    useEffect(() => {
        const sortBy = sortType.properties.replace("-", "");
        const order = sortType.properties.includes("-") ? "desc" : "asc";
        const category = categoryId > 0 ? `category=${categoryId}` : "";
        const search = searchValue ? `&search=${searchValue}` : "";

        const data = `?page=${pageCount}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`;

        setIsLoading(true);
        axios.get(`https://66f2d5e071c84d805876ef77.mockapi.io/pizzas${data}`).then((response) => {
            setPizzas(response.data);
            setIsLoading(false);
        });
        window.scrollTo(0, 0);
    }, [categoryId, sortType.properties, searchValue, pageCount]);

    return (
        <div className={styles.Home} onClick={() => setOpen(false)}>
            <div className={styles["content-top"]} onClick={(e) => e.stopPropagation()}>
                <Sorting openPopup={open} setOpenPopup={() => setOpen(!open)} />
                <Categories />
            </div>
            <h2 className={styles.heading}>Все пиццы</h2>
            <div className={styles["content-page"]}>
                <div className={styles.content}>
                    {isLoading
                        ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
                        : pizzas.map((item) => <PizzaBlock key={item.id} {...item} />)}
                </div>
                <Pagination onPageChange={onChangePage} />
            </div>
        </div>
    );
};
