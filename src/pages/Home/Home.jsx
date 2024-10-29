import { useEffect, useState } from "react";
import axios from "axios";

import styles from "./Home.module.scss";

import { Sorting } from "../../component/Sorting/Sorting";
import { Categories } from "../../component/Categories/Categories";
import { Skeleton } from "../../component/PizzaBlock/Skeleton";
import { PizzaBlock } from "../../component/PizzaBlock/PizzaBlock";

export const Home = () => {
    const [pizzas, setPizzas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [open, setOpen] = useState(false);
    const [categoryId, setCategoryId] = useState(0);
    const [sortType, setSortType] = useState({
        name: "популярности",
        properties: "rating",
    });

    useEffect(() => {
        const sortBy = sortType.properties.replace("-", "");
        const order = sortType.properties.includes("-") ? "desc" : "asc";
        const category = categoryId > 0 ? `category=${categoryId}` : "";

        setIsLoading(true);
        axios
            .get(
                `https://66f2d5e071c84d805876ef77.mockapi.io/pizzas?${category}&sortBy=${sortBy}&order=${order}`
            )
            .then((response) => {
                setTimeout(() => {
                    setPizzas(response.data);
                    setIsLoading(false);
                }, 3500);
            });
        window.scrollTo(0, 0);
    }, [categoryId, sortType]);

    return (
        <div className={styles.Home} onClick={() => setOpen(false)}>
            <div className={styles["content-top"]} onClick={(e) => e.stopPropagation()}>
                <Sorting
                    value={sortType}
                    onChangeSort={(i) => setSortType(i)}
                    openPopup={open}
                    setOpenPopup={() => setOpen(!open)}
                />
                <Categories value={categoryId} onClickCategory={(i) => setCategoryId(i)} />
            </div>
            <h2 className={styles.heading}>Все пиццы</h2>
            <div className={styles["content-page"]}>
                {isLoading
                    ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
                    : pizzas.map((item) => <PizzaBlock key={item.id} {...item} />)}
            </div>
        </div>
    );
};
