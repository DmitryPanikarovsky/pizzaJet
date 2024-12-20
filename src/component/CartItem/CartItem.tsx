import { addPizzasInCart, CartItem, decreasePizzaCount, removePizzasOutCart } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import styles from "./CartItem.module.scss";
import { FC } from 'react'

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

    const onClickPlus = () => dispatch(addPizzasInCart({} as CartItem));

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
                        <img src="./img/minus.svg" alt="минус" />
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
