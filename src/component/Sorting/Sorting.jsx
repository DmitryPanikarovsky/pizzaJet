import styles from "./Sorting.module.scss";

export const Sorting = () => {
    return (
        <div className={styles.sorting}>
            <div className={styles["sorting__label"]}>
                <img src="./img/vector-sort.svg" alt="стрелочка" />
                <div>Сортировка:</div>
                <span>по популярности</span>
            </div>
            <div className={styles['sorting__popup']}>
                <ul>
                    <li className={styles.active}>по популярности</li>
                    <li>по цене</li>
                    <li>по алфавиту</li>
                </ul>
            </div>
        </div>
    );
};
