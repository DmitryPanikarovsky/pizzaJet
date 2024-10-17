import styles from "./Categories.module.scss";

export const Categories = () => {
    return (
        <ul className={styles.categories}>
            <li className={styles.active}>Все</li>
            <li>Мясные</li>
            <li>Вегетарианская</li>
            <li>Гриль</li>
            <li>Острые</li>
            <li>Закрытые</li>
        </ul>
    );
};
