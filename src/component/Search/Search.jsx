import { useContext } from "react";
import { SearchContext } from "../../App";

import styles from "./Search.module.scss";

export const Search = () => {
    const { searchValue, setSearchValue } = useContext(SearchContext);

    return (
        <div className={styles.search}>
            <img
                className={styles["search-pic"]}
                src="https://img.icons8.com/pastel-glyph/50/search.png"
                alt="search"
            />
            <input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className={styles.input}
                placeholder="Поиск пиццы..."
            />
            {searchValue && (
                <div className={styles.remove} onClick={() => setSearchValue("")}>
                    <img src="https://img.icons8.com/ios/50/FD7E14/cancel.png" alt="cancel" />
                </div>
            )}
        </div>
    );
};
