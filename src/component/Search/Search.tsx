/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useCallback, useState, FC, ChangeEvent } from "react";
import styles from "./Search.module.scss";
import debounce from "lodash.debounce";
import { setSearchValue } from "../../redux/slices/filterSlice";
import { useDispatch } from "react-redux";

export const Search: FC = () => {
    
    const dispatch = useDispatch();
    const inputRef = useRef<HTMLInputElement>(null);

    const [value, setValue] = useState<string>();

    const onClickClear = () => {
        dispatch(setSearchValue(""));
        setValue("");
        inputRef.current?.focus();
    };

    const updateSearchValue = useCallback(
        debounce((str: string) => dispatch(setSearchValue(str)), 1000), 
        []
    );

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
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
