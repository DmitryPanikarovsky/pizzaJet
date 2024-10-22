import React from "react";
import axios from "axios";

import styles from "./Home.module.scss";

import { Sorting } from "../../component/Sorting/Sorting";
import { Categories } from "../../component/Categories/Categories";
import { Skeleton } from "../../component/PizzaBlock/Skeleton";
import { PizzaBlock } from "../../component/PizzaBlock/PizzaBlock";

export const Home = () => {
    const [pizzas, setPizzas] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        axios.get("https://66f2d5e071c84d805876ef77.mockapi.io/pizzas").then((response) => {
            setTimeout(() => {
                setPizzas(response.data);
                setIsLoading(false);
            }, 3500);
        });
    }, []);

    return (
        <div className={styles.Home}>
            <div className={styles["content-top"]}>
                <Sorting />
                <Categories />
            </div>
            <h2 className={styles.heading}>Все пиццы</h2>
            <div className={styles["content-page"]}>
                {isLoading
                    ? [...new Array(11)].map((_, index) => <Skeleton key={index} />)
                    : pizzas.map((item) => <PizzaBlock key={item.id} {...item} />)}
            </div>
        </div>
    );
};
