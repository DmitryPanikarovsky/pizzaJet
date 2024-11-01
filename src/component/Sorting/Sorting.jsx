import React from "react";
import styles from "./Sorting.module.scss";

export const Sorting = ({ value, onChangeSort, openPopup, setOpenPopup }) => {
    const sortItem = [
        { name: "популярности", properties: "rating" },
        { name: "цене (дешевле)", properties: "price" },
        { name: "цене (дороже)", properties: "-price" },
        { name: "алфавиту", properties: "title" },
    ];

    const onClickSortItem = (index) => {
        onChangeSort(index);
        setOpenPopup();
    };

    return (
        <div className={styles.sorting}>
            <div className={styles["sorting__label"]}>
                <img src="./img/vector-sort.svg" alt="стрелочка" className={openPopup ? styles.active : undefined} />
                <div>Сортировка по:</div>
                <span onClick={setOpenPopup}>{value.name}</span>
            </div>
            {openPopup && (
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
