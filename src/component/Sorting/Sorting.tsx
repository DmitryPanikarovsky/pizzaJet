import { useDispatch } from "react-redux";
import { setSortType, Sort } from "../../redux/slices/filterSlice";
import { FC, useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import styles from "./Sorting.module.scss";

export const sortItem: Sort[] = [
    { name: "популярности", sortProperty: "rating" },
    { name: "цене (дешевле)", sortProperty: "price" },
    { name: "цене (дороже)", sortProperty: "-price" },
    { name: "алфавиту", sortProperty: "title" },
];

type SortingProps = {
    value: Sort;
}

export const Sorting: FC<SortingProps> = ({ value }) => {
    const dispatch = useDispatch();

    const sortRef = useRef<HTMLSpanElement>(null);

    const [open, setOpen] = useState<boolean>(false);

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
                    {value.name}
                </span>
            </div>
            {open && (
                <div className={styles["sorting__popup"]}>
                    <ul>
                        {sortItem.map((object, index) => (
                            <li
                                key={index}
                                onClick={() => onClickSortItem(object)}
                                className={value.sortProperty === object.sortProperty ? styles.active : ""}
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
