import { useDispatch } from "react-redux";
import styles from "./CartItem.module.scss";
import { addPizzasInCart, decreasePizzaCount, removePizzasOutCart } from "../../redux/slices/cartSlice";

export const CartItem = ({ id, title, price, count, imageUrl, type, size }) => {

    const dispatch = useDispatch();

    const onClickPlus = () => dispatch(addPizzasInCart({ id }));

    const onClickMinus = () => dispatch(decreasePizzaCount(id));

    const removeItemCart = () => {
        setTimeout(() => {
            if (window.confirm("Ты правда хочешь удалить эту вкуснейшую пиццу из списка?")) {
                dispatch(removePizzasOutCart(id));
            }
        }, 200);
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
