import React from "react";
import styles from "./Sorting.module.scss";

export const Sorting = ({ value, onChangeSort }) => {
    const [open, setOpen] = React.useState(false);

    const sortItem = [
        { name: "популярности", properties: "rating" },
        { name: "цене (дешевле)", properties: "price" },
        { name: "цене (дороже)", properties: "-price" },
        { name: "алфавиту", properties: "title" },
    ];

    const onClickSortItem = (index) => {
        onChangeSort(index);
        setOpen(!open);
    };

    return (
        <div className={styles.sorting}>
            <div className={styles["sorting__label"]}>
                <img src="./img/vector-sort.svg" alt="стрелочка" className={open && styles.active} />
                <div>Сортировка по:</div>
                <span onClick={() => setOpen(!open)}>{value.name}</span>
            </div>
            {open && (
                <div className={styles["sorting__popup"]}>
                    <ul>
                        {sortItem.map((object, index) => (
                            <li
                                key={index}
                                onClick={() => onClickSortItem(object)}
                                className={value.properties === object.properties ? styles.active : ""}
                            >
                                {object.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
