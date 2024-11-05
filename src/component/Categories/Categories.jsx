import React from "react";
import styles from "./Categories.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../../redux/slices/filterSlice";

export const Categories = ({ value, onClickCategory }) => {
    const dispatch = useDispatch();
    const categoryId = useSelector((state) => state.filterReducer.categoryId);

    const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

    return (
        <ul className={styles.categories}>
            {categories.map((categoryName, i) => (
                <li
                    key={i}
                    onClick={() => dispatch(setCategoryId(i))}
                    className={categoryId === i ? styles.active : ""}
                >
                    {categoryName}
                </li>
            ))}
        </ul>
    );
};
