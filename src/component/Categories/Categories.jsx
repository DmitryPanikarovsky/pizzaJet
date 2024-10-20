import React from "react";
import styles from "./Categories.module.scss";

export const Categories = () => {
    const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

    const [activeIndex, setActiveIndex] = React.useState(0);

    return (
        <ul className={styles.categories}>
            {categories.map((value, index) => (
                <li
                    key={index}
                    onClick={() => {
                        setActiveIndex(index);
                    }}
                    className={activeIndex === index ? styles.active : ""}
                >
                    {value}
                </li>
            ))}
        </ul>
    );
};
