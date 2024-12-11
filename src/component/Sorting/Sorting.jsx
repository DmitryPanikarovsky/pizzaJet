import React, { useState } from "react";
import styles from "./Sorting.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setSortType } from "../../redux/slices/filterSlice";
import { useRef } from "react";
import { useEffect } from "react";

export const sortItem = [
    { name: "популярности", sortProperty: "rating" },
    { name: "цене (дешевле)", sortProperty: "price" },
    { name: "цене (дороже)", sortProperty: "-price" },
    { name: "алфавиту", sortProperty: "title" },
];

export const Sorting = () => {
    const dispatch = useDispatch();
    const sort = useSelector((state) => state.filterReducer.sort);

    const sortRef = useRef();

    const [open, setOpen] = useState(false);

    const onClickSortItem = (object) => dispatch(setSortType(object));

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.target !== sortRef.current) {
                setOpen(false);
                document.body.removeEventListener("click", handleClickOutside);
            }
        }

        if (open) {
            document.body.addEventListener('click', handleClickOutside);
        }
    }, [open]);

    return (
        <div className={styles.sorting}>
            <div className={styles["sorting__label"]}>
                <img
                    src="./img/vector-sort.svg"
                    alt="стрелочка"
                    className={open ? styles.active : undefined}
                />
                <div>Сортировка по:</div>
                <span ref={sortRef} onClick={() => setOpen((open) => !open)}>
                    {sort.name}
                </span>
            </div>
            {open && (
                <div className={styles["sorting__popup"]}>
                    <ul>
                        {sortItem.map((object, index) => (
                            <li
                                key={index}
                                onClick={() => onClickSortItem(object)}
                                className={sort.sortProperty === object.sortProperty ? styles.active : ""}
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
