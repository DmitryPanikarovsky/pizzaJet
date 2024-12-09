import { useState } from "react";
import styles from "./PizzaBlock.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addPizzasInCart, decreasePizzaCount } from "../../redux/slices/cartSlice";

export const PizzaBlock = ({ id, title, price, imageUrl, sizes, types }) => {
    const dispatch = useDispatch();
    const cartItem = useSelector((state) => state.cartReducer.cartPizzas.find((obj) => obj.id === id));

    const [activeType, setActiveType] = useState(0);
    const [activeSize, setActiveSize] = useState(0);

    const typeNames = ["тонкое", "традиционное"];

    const addedCount = cartItem ? cartItem.count : 0;

    const onClickAdd = () => {
        const item = {
            id,
            title,
            price,
            imageUrl,
            type: typeNames[activeType],
            size: sizes[activeSize],
        };

        dispatch(addPizzasInCart(item));
    };

    const onClickPlus = () => {
        dispatch(addPizzasInCart({ id }));
    };

    const onClickMinus = () => {
        dispatch(decreasePizzaCount(id));
    };

    return (
        <div className={styles["pizza-block"]}>
            <img className={styles["pizza-block__image"]} src={imageUrl} alt="пицца" />
            <h4 className={styles["pizza-block__title"]}>{title}</h4>
            <div className={styles["pizza-block__selector"]}>
                <ul>
                    {types.map((typeId) => (
                        <li
                            key={typeId}
                            onClick={() => setActiveType(typeId)}
                            className={activeType === typeId || types.length === 1 ? styles.active : ""}
                        >
                            {typeNames[typeId]}
                        </li>
                    ))}
                </ul>
                <ul>
                    {sizes.map((size, index) => (
                        <li
                            key={index}
                            onClick={() => setActiveSize(index)}
                            className={activeSize === index ? styles.active : ""}
                        >
                            {size} см.
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles["pizza-block__bottom"]}>
                <div className={styles["pizza-block__price"]}>от {price} ₽</div>
                <div className={styles.button}>
                    {addedCount > 0 ? (
                        <div className={styles.counter}>
                            <button onClick={() => onClickMinus()} className={styles.minus}>
                                <img src="./img/minus.svg" alt="минус" />
                            </button>
                            <span>{cartItem.count}</span>
                            <button onClick={() => onClickPlus()} className={styles.plus}>
                                <img src="./img/plus.svg" alt="плюс" />
                            </button>
                        </div>
                    ) : (
                        <span onClick={() => onClickAdd()}>Добавить</span>
                    )}
                </div>
            </div>
        </div>
    );
};
