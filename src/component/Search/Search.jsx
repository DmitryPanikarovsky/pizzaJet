import { useContext, useRef, useState, useCallback } from "react";
import { SearchContext } from "../../App";

import styles from "./Search.module.scss";
import debounce from "lodash.debounce";

export const Search = () => {
    const [value, setValue] = useState("");
    const { setSearchValue } = useContext(SearchContext);
    const inputRef = useRef();

    const onClickClear = () => {
        setSearchValue("");
        setValue("");
        inputRef.current.focus();
    };

    const updateSearchValue = useCallback(
        debounce((str) => {
            setSearchValue(str);
        }, 1000),
        []
    );

    const onChangeInput = (event) => {
        setValue(event.target.value);
        updateSearchValue(event.target.value);
    };

    return (
        <div className={styles.search}>
            <img
                className={styles["search-pic"]}
                src="https://img.icons8.com/pastel-glyph/50/search.png"
                alt="search"
            />
            <input
                ref={inputRef}
                value={value}
                onChange={onChangeInput}
                className={styles.input}
                placeholder="Поиск пиццы..."
            />
            {value && (
                <div className={styles.remove} onClick={onClickClear}>
                    <img src="https://img.icons8.com/ios/50/FD7E14/cancel.png" alt="cancel" />
                </div>
            )}
        </div>
    );
};
