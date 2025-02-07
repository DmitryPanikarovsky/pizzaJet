import styles from "./PizzaBlock.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
    addPizzasInCart,
    CartItem,
    decreasePizzaCount,
    selectCartItemById,
} from "../../redux/slices/cartSlice";
import { FC, useState } from "react";
import { Link } from "react-router-dom";

type PizzaBlockProps = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    sizes: number[];
    types: number[];
    count: number;
};

export const PizzaBlock: FC<PizzaBlockProps> = ({ id, title, price, imageUrl, sizes, types, count }) => {
    const dispatch = useDispatch();
    const cartItem = useSelector(selectCartItemById(id));
    const addedCount = cartItem ? cartItem.count : 0;
    const typeNames = ["тонкое", "традиционное"];

    const [activeType, setActiveType] = useState<number>(types[0]);
    const [activeSize, setActiveSize] = useState<number>(0);

    const onClickAdd = () => {
        const item: CartItem = {
            id,
            title,
            price,
            imageUrl,
            type: typeNames[activeType],
            size: sizes[activeSize],
            count,
        };

        dispatch(addPizzasInCart(item));
    };

    const onClickPlus = () => dispatch(addPizzasInCart({ id } as CartItem));

    const onClickMinus = () => dispatch(decreasePizzaCount(id));

    return (
        <div className={styles["pizza-block"]}>
            <Link to={`/pizza/${id}`}>
                <img className={styles["pizza-block__image"]} src={imageUrl} alt="пицца" />
            </Link>
            <h4 className={styles["pizza-block__title"]}>{title}</h4>
            <div className={styles["pizza-block__selector"]}>
                <ul>
                    {types.map((typeId) => (
                        <li
                            key={typeId}
                            onClick={() => setActiveType(typeId)}
                            className={activeType === typeId ? styles.active : ""}
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
                {/* <div className={styles.button}>
                    {addedCount > 0 ? (
                        <div className={styles.counter}>
                            <button onClick={() => onClickMinus()} className={styles.minus}>
                                <img src="./img/minus.svg" alt="минус" />
                            </button>
                            <Link className={styles["cart-counter"]} to={"/cart"}>
                                <img
                                    width="21"
                                    height="21"
                                    src="https://img.icons8.com/ios-filled/50/FD7E14/wicker-basket--v1.png"
                                    alt="wicker-basket--v1"
                                />
                                <span>{cartItem?.count}</span>
                            </Link>
                            <button onClick={() => onClickPlus()} className={styles.plus}>
                                <img src="./img/plus.svg" alt="плюс" />
                            </button>
                        </div>
                    ) : (
                        <span onClick={() => onClickAdd()}>Добавить</span>
                    )}
                </div> */}
                {addedCount > 0 ? (
                    <div className={styles["block-counter"]}>
                        <div className={styles.counter}>
                            <button onClick={() => onClickMinus()} className={styles.minus}>
                                <img src="./img/minus.svg" alt="минус" />
                            </button>
                            <Link className={styles["cart-counter"]} to={"/cart"}>
                                <img
                                    width="21"
                                    height="21"
                                    src="https://img.icons8.com/ios-filled/50/FD7E14/wicker-basket--v1.png"
                                    alt="wicker-basket--v1"
                                />
                                <span>{cartItem?.count}</span>
                            </Link>
                            <button onClick={() => onClickPlus()} className={styles.plus}>
                                <img src="./img/plus.svg" alt="плюс" />
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className={styles.button}>
                        <span onClick={() => onClickAdd()}>Добавить</span>
                    </div>
                )}
            </div>
        </div>
    );
};
