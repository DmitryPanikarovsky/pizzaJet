import {
    addPizzasInCart,
    CartItem,
    decreasePizzaCount,
    removePizzasOutCart,
} from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import styles from "./CartItem.module.scss";
import { FC } from "react";

type CartProductProps = {
    id: string;
    title: string;
    price: number;
    count: number;
    imageUrl: string;
    type: string;
    size: number;
};

export const CartProduct: FC<CartProductProps> = ({ id, title, price, count, imageUrl, type, size }) => {
    const dispatch = useDispatch();

    const onClickPlus = () => dispatch(addPizzasInCart({ id } as CartItem));

    const onClickMinus = () => dispatch(decreasePizzaCount(id));

    const removeItemCart = () => {
        dispatch(removePizzasOutCart(id));
    };

    return (
        <div className={styles["product-item"]}>
            <div className={styles["item-left"]}>
                <img width={80} src={imageUrl} alt="пицца" />
                <div className={styles.description}>
                    <h4>{title}</h4>
                    <span>
                        {type} тесто, {size}см.
                    </span>
                </div>
            </div>
            <div className={styles["item-right"]}>
                <div className={styles.counter}>
                    <button onClick={() => onClickMinus()} className={styles.minus}>
                        <svg
                            width="10"
                            height="2"
                            viewBox="0 0 10 2"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4.04019 0.0399933H8.84019C9.37035 0.0399933 9.80019 0.469833 9.80019 0.999993C9.80019 1.53015 9.37035 1.95999 8.84019 1.95999H4.04019H1.1602C0.630035 1.95999 0.200195 1.53015 0.200195 0.999993C0.200195 0.469833 0.630035 0.0399933 1.1602 0.0399933H4.04019Z"
                                fill="#FE5F1E"
                            />
                        </svg>
                    </button>
                    <span>{count}</span>
                    <button onClick={() => onClickPlus()} className={styles.plus}>
                        <img src="./img/plus.svg" alt="плюс" />
                    </button>
                </div>
                <div className={styles["item-price"]}>
                    {price * count} ₽<span>{price} ₽ ед.</span>
                </div>
                <button onClick={() => removeItemCart()} className={styles.remove}>
                    <img src="./img/plus.svg" alt="крестик удалить" />
                </button>
            </div>
        </div>
    );
};
