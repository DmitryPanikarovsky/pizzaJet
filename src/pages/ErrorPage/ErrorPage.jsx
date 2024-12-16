import React from "react";

import styles from "./ErrorPage.module.scss";

export const ErrorPage = () => {
    return (
        <div className={styles.errorPage}>
            <div className={styles.smile}>🤨</div>
            <div className={styles.error}>Произошла ошибка</div>
            <p className={styles.text}>К сожалению, не удалось получить пицццы. Повторите попытку позже</p>
        </div>
    );
};
