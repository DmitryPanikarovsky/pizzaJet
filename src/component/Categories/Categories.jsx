import React from "react";
import styles from "./Categories.module.scss";

export const Categories = () => {
    const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

    const [activeIndex, setActiveIndex] = React.useState(0);

    const onClickCategory = (index) => {
        setActiveIndex(index);
    };

    return (
        <ul className={styles.categories}>
            {categories.map((value, index) => (
                <li onClick={() => {onClickCategory(index)}} className={activeIndex === index ? styles.active : ''}>
                    {value}
                </li>
            ))}
        </ul>
    );
};
