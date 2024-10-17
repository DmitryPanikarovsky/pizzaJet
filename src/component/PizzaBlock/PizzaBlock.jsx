import styles from "./PizzaBlock.module.scss";

export const PizzaBlock = ({ title, price, imageUrl }) => {
    return (
        <div className={styles["pizza-block"]}>
            <img className={styles["pizza-block__image"]} src={imageUrl} alt="пицца" />
            <h4 className={styles["pizza-block__title"]}>{title}</h4>
            <div className={styles["pizza-block__selector"]}>
                <ul>
                    <li>тонкое</li>
                    <li className={styles.active}>традиционное</li>
                </ul>
                <ul>
                    <li className={styles.active}>26 см.</li>
                    <li>30 см.</li>
                    <li>40 см.</li>
                </ul>
            </div>
            <div className={styles["pizza-block__bottom"]}>
                <div className={styles["pizza-block__price"]}>от {price} ₽</div>
                <div className={styles.button}>
                    <img src="./img/add.svg" alt="Добавить" />
                    <span>Добавить</span>
                    <i>2</i>
                </div>
            </div>
        </div>
    );
};
