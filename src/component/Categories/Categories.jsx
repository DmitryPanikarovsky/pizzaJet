import React from "react";
import styles from "./Categories.module.scss";

export const Categories = ({ value, onClickCategory }) => {
    const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

    return (
        <ul className={styles.categories}>
            {categories.map((categoryName, i) => (
                <li
                    key={i}
                    onClick={() => onClickCategory(i)}
                    className={value === i ? styles.active : ""}
                >
                    {categoryName}
                </li>
            ))}
        </ul>
    );
};
