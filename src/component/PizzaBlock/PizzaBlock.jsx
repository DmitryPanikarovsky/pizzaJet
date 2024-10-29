import { useState } from 'react'
import styles from "./PizzaBlock.module.scss";

export const PizzaBlock = ({ title, price, imageUrl, sizes, types }) => {
    const [activeType, setActiveType] = useState(0);
    const [activeSize, setActiveSize] = useState(0);
    const [count, setCount] = useState(0);

    const typeNames = ["тонкое", "традиционное"];

    const addPizzaOnCart = () => {
        setCount((count) => count + 1);
    };

    return (
        <div className={styles["pizza-block"]}>
            <img className={styles["pizza-block__image"]} src={imageUrl} alt="пицца" />
            <h4 className={styles["pizza-block__title"]}>{title}</h4>
            <div className={styles["pizza-block__selector"]}>
                <ul>
                    {types.map((typeId) => (
                        <li key={typeId} onClick={() => setActiveType(typeId)} className={activeType === typeId ? styles.active : ""}>
                            {typeNames[typeId]}
                        </li>
                    ))}
                </ul>
                <ul>
                    {sizes.map((size, index) => (
                        <li key={index} onClick={() => setActiveSize(index)} className={activeSize === index ? styles.active : ""}>
                            {size} см.
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles["pizza-block__bottom"]}>
                <div className={styles["pizza-block__price"]}>от {price} ₽</div>
                <div onClick={() => addPizzaOnCart()} className={styles.button}>
                    <img src="./img/add.svg" alt="Добавить" />
                    <span>Добавить</span>
                    {count > 0 ? <b>{count}</b> : ""}
                </div>
            </div>
        </div>
    );
};
