import styles from "./Search.module.scss";

export const Search = () => {
    return (
        <div className={styles.search}>
            <img className={styles.img}
                src="https://img.icons8.com/pastel-glyph/50/search.png"
                alt="search"
            />
            <input className={styles.input} placeholder="Поиск..." />
            <button className={styles.clear}>
                <img src="./img/plus.svg" alt="крестик удалить" />
            </button>
        </div>
    );
};
