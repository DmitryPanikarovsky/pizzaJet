import { FC, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import styles from "./Cart.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { CartProduct } from "../../component/publicApi";
import { cleanCart, selectCart } from "../../redux/slices/cartSlice";

const EmptyCart = lazy(() => import("../EmptyCart/EmptyCart"));

const Cart: FC = () => {
    const dispatch = useDispatch();

    const { totalPrice, cartPizzas } = useSelector(selectCart);

    const totalCount = cartPizzas.reduce((sum: number, item: any) => sum + item.count, 0);

    const clean = () => {
        if (window.confirm("Очистить корзину?")) {
            dispatch(cleanCart());
        }
    };

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
                        {cartPizzas.map((item: any) => (
                            <CartProduct key={item.id} {...item} />
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
                                    <svg
                                        width="8"
                                        height="14"
                                        viewBox="0 0 8 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7 13L1 6.93015L6.86175 1"
                                            stroke="#606060"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
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
        <Suspense fallback={<>...</>}>
            <EmptyCart />
        </Suspense>
    );
};

export default Cart;
