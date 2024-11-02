import React from "react";
import styles from "./Sorting.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setSortType } from "../../redux/slices/filterSlice";

const sortItem = [
    { name: "популярности", properties: "rating" },
    { name: "цене (дешевле)", properties: "price" },
    { name: "цене (дороже)", properties: "-price" },
    { name: "алфавиту", properties: "title" },
];

export const Sorting = ({ openPopup, setOpenPopup }) => {
    const dispatch = useDispatch();
    const sort = useSelector((state) => state.filterReducer.sortType);

    const onClickSortItem = (object) => {
        dispatch(setSortType(object));
        setOpenPopup();
    };

    return (
        <div className={styles.sorting}>
            <div className={styles["sorting__label"]}>
                <img
                    src="./img/vector-sort.svg"
                    alt="стрелочка"
                    className={openPopup ? styles.active : undefined}
                />
                <div>Сортировка по:</div>
                <span onClick={setOpenPopup}>{sort.name}</span>
            </div>
            {openPopup && (
                <div className={styles["sorting__popup"]}>
                    <ul>
                        {sortItem.map((object, index) => (
                            <li
                                key={index}
                                onClick={() => onClickSortItem(object)}
                                className={sort.properties === object.properties ? styles.active : ""}
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
