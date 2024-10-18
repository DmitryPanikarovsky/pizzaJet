import React from "react";
import styles from "./PizzaBlock.module.scss";

export const PizzaBlock = ({ title, price, imageUrl, sizes, types }) => {
    const typeNames = ["тонкое", "традиционное"];

    const [activeSize, setActiveSize] = React.useState(0);
    const [activeType, setActiveType] = React.useState(0);

    return (
        <div className={styles["pizza-block"]}>
            <img className={styles["pizza-block__image"]} src={imageUrl} alt="пицца" />
            <h4 className={styles["pizza-block__title"]}>{title}</h4>
            <div className={styles["pizza-block__selector"]}>
                <ul>
                    {types.map((typeId) => (
                        <li onClick={() => setActiveType(typeId)} className={activeType === typeId ? styles.active : ""}>
                            {typeNames[typeId]}
                        </li>
                    ))}
                </ul>
                <ul>
                    {sizes.map((size, index) => (
                        <li onClick={() => setActiveSize(index)} className={activeSize === index ? styles.active : ""}>
                            {size} см.
                        </li>
                    ))}
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
