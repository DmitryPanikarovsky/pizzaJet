import React from "react";
import { Link } from "react-router-dom";
import styles from "./Cart.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "../../component/CartItem/CartItem";
import { EmptyCart } from "../EmptyCart/EmptyCart";
import { cleanCart } from '../../redux/slices/cartSlice';

export const Cart = () => {
    const dispatch = useDispatch();

    const { totalPrice, cartPizzas } = useSelector((state) => state.cartReducer);

    const totalCount = cartPizzas.reduce((sum, item) => sum + item.count, 0);

    const clean = () => {
        if (window.confirm("Очистить корзину?")) {
            dispatch(cleanCart());
        }
    }

    return cartPizzas.length > 0 ? (
        <div className={styles.сart}>
            <div className={styles["сart__content"]}>
                <div className={styles["сart__header"]}>
                    <div className={styles.heading}>
                        <img src="./img/cart-icon-black.svg" alt="иконка корзины" />
                        <h3>Корзина</h3>
                    </div>
                    <button onClick={() => clean()} className={styles.clear}>
                        <img src="./img/clear-cart.svg" alt="значок удалить" />
                        <span>Очистить корзину</span>
                    </button>
                </div>
                <div className={styles["сart__list"]}>
                    <div className={styles["сart__products"]}>
                        {cartPizzas.map((item) => (
                            <CartItem key={item.id} {...item} />
                        ))}
                    </div>
                    <div>
                        <div className={styles.total}>
                            <div className={styles["total-pieces"]}>
                                Всего пицц: <span>{totalCount} шт</span>
                            </div>
                            <div className={styles["total-price"]}>
                                Сумма заказа: <span>{totalPrice} ₽</span>
                            </div>
                        </div>
                        <div className={styles.buttons}>
                            <Link to={"/"}>
                                <button className={styles.left}>
                                    <img src="./img/back.svg" alt="стрелка назад" />
                                    Вернуться назад
                                </button>
                            </Link>
                            <button className={styles.right}>Оплатить сейчас</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <EmptyCart />
    );
};
