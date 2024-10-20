import React from "react";
import styles from "./Sorting.module.scss";

export const Sorting = () => {
    const sortItem = ["популярности", "цене", "алфавиту"];

    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = React.useState();

    const onClickSortItem = (index) => {
        setSelected(index);
        setOpen(!open);
    };

    return (
        <div className={styles.sorting}>
            <div className={styles["sorting__label"]}>
                <img src="./img/vector-sort.svg" alt="стрелочка" />
                <div>Сортировка по:</div>
                <span onClick={() => setOpen(!open)}>{sortItem[selected]}</span>
            </div>
            {open && (
                <div className={styles["sorting__popup"]}>
                    <ul>
                        {sortItem.map((value, index) => (
                            <li
                                key={index}
                                onClick={() => onClickSortItem(index)}
                                className={selected === index ? styles.active : ""}
                            >
                                {value}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
