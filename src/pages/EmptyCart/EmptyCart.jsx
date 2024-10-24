import React from "react";

import styles from "./EmptyCart.module.scss";

export const EmptyCart = () => {
    return (
        <div className={styles.emptyCart}>
            <div className={styles["emptyCart__content"]}>
                <div className={styles.heading}>Корзина пустая 😕</div>
                <span className={styles.description}>
                    Вероятнее всего вы не заказывали ещё пиццу. <br />
                    Для того, чтобы заказать пиццу, перейди на главную страницу.
                </span>
                <img className={styles["emptyCart-img"]} width={300} src="./img/emptyCart.png" alt="пустая корзина" />
                <button className={styles.back}>Иди и купи уже</button>
            </div>
        </div>
    );
};
