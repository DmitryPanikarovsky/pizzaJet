import React from "react";
import styles from "./Categories.module.scss";

export const Categories = () => {
    const [activeIndex, setActiveIndex] = React.useState();

    const onClickCategory = (index) => {
        setActiveIndex(index);
    };

    return (
        <ul className={styles.categories}>
            <li onClick={() => onClickCategory(0)} className={activeIndex === 0 ? styles.active : ""}>
                Все
            </li>
            <li onClick={() => onClickCategory(1)} className={activeIndex === 1 ? styles.active : ""}>
                Мясные
            </li>
            <li onClick={() => onClickCategory(2)} className={activeIndex === 2 ? styles.active : ""}>
                Вегетарианская
            </li>
            <li onClick={() => onClickCategory(3)} className={activeIndex === 3 ? styles.active : ""}>
                Гриль
            </li>
            <li onClick={() => onClickCategory(4)} className={activeIndex === 4 ? styles.active : ""}>
                Острые
            </li>
            <li onClick={() => onClickCategory(5)} className={activeIndex === 5 ? styles.active : ""}>
                Закрытые
            </li>
        </ul>
    );
};
