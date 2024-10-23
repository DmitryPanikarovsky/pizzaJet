import React from "react";

import styles from "./NotFound.module.scss";
import { Link } from 'react-router-dom'

export const NotFound = () => {
    return (
        <div className={styles.notfound}>
            <div className={styles.smile}>🤨</div>
            <div className={styles.error}>Ничего не найдено</div>
            <p className={styles.text}>К сожалению, данная страница отсутствует в нашем интернет-магазине</p>
            <Link to={"/"}>
                <button className={styles.home}>На главную</button>
            </Link>
        </div>
    );
};
