import React, { FC } from "react";
import styles from "./Categories.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../../redux/slices/filterSlice";
import { selectFilter } from "../../redux/slices/filterSlice";

export const categories = ["Все", "Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"];

export const Categories: FC = () => {
    const dispatch = useDispatch();
    const { categoryId } = useSelector(selectFilter);

    return (
        <ul className={styles.categories}>
            {categories.map((categoryName, i) => (
                <li
                    key={i}
                    onClick={() => dispatch(setCategoryId(i))}
                    className={categoryId === i ? styles.active : ""}
                >
                    <span>{categoryName}</span>
                </li>
            ))}
        </ul>
    );
};
