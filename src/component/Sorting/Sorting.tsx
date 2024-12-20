import { setSortType, Sort } from "../../redux/slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Sorting.module.scss";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { selectFilter } from "../../redux/slices/filterSlice";

// type SortListItem = {
//     name: string;
//     sortProperty: string;
// }

export const sortItem: Sort[] = [
    { name: "популярности", sortProperty: "rating" },
    { name: "цене (дешевле)", sortProperty: "price" },
    { name: "цене (дороже)", sortProperty: "-price" },
    { name: "алфавиту", sortProperty: "title" },
];

export const Sorting = () => {
    const dispatch = useDispatch();
    const { sort } = useSelector(selectFilter);

    const sortRef = useRef<HTMLSpanElement>(null);

    const [open, setOpen] = useState(false);

    const onClickSortItem = (object: Sort) => dispatch(setSortType(object));

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (event.target !== sortRef.current) {
                setOpen(false);
                document.body.removeEventListener("click", handleClickOutside);
            }
        };

        if (open) {
            document.body.addEventListener("click", handleClickOutside);
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
