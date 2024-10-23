import React from "react";

import styles from "./Cart.module.scss";
import { Link } from 'react-router-dom'

export const Cart = () => {
    return (
        <div className={styles.сart}>
            <div className={styles["сart__content"]}>
                <div className={styles["сart__header"]}>
                    <div className={styles.heading}>
                        <img src="./img/cart-icon-black.svg" alt="иконка корзины" />
                        <h3>Корзина</h3>
                    </div>
                    <button className={styles.clear}>
                        <img src="./img/clear-cart.svg" alt="значок удалить" />
                        <span>Очистить корзину</span>
                    </button>
                </div>
                <ul className={styles["сart__products"]}>
                    <li className={styles["product-item"]}>
                        <div className={styles["item-left"]}>
                            <img width={80} src="https://media.dodostatic.net/image/r:584x584/11EE7D610D2925109AB2E1C92CC5383C.avif" alt="пицца" />
                            <div className={styles.description}>
                                <h4>Сырный цыпленок</h4>
                                <span>тонкое тесто, 26см</span>
                            </div>
                        </div>
                        <div className={styles["item-right"]}>
                            <div className={styles.counter}>
                                <button className={styles.minus}>
                                    <img src="./img/minus.svg" alt="минус" />
                                </button>
                                <span>2</span>
                                <button className={styles.plus}>
                                    <img src="./img/plus.svg" alt="плюс" />
                                </button>
                            </div>
                            <span className={styles["item-price"]}>770 ₽</span>
                            <button className={styles.remove}>
                                <img src="./img/plus.svg" alt="крестик удалить" />
                            </button>
                        </div>
                    </li>
                    <li className={styles["product-item"]}>
                        <div className={styles["item-left"]}>
                            <img width={80} src="https://media.dodostatic.net/image/r:584x584/11EE7D610D2925109AB2E1C92CC5383C.avif" alt="пицца" />
                            <div className={styles.description}>
                                <h4>Сырный цыпленок</h4>
                                <span>тонкое тесто, 26см</span>
                            </div>
                        </div>
                        <div className={styles["item-right"]}>
                            <div className={styles.counter}>
                                <button className={styles.minus}>
                                    <img src="./img/minus.svg" alt="минус" />
                                </button>
                                <span>2</span>
                                <button className={styles.plus}>
                                    <img src="./img/plus.svg" alt="плюс" />
                                </button>
                            </div>
                            <span className={styles["item-price"]}>770 ₽</span>
                            <button className={styles.remove}>
                                <img src="./img/plus.svg" alt="крестик удалить" />
                            </button>
                        </div>
                    </li>
                    <li className={styles["product-item"]}>
                        <div className={styles["item-left"]}>
                            <img width={80} src="https://media.dodostatic.net/image/r:584x584/11EE7D610D2925109AB2E1C92CC5383C.avif" alt="пицца" />
                            <div className={styles.description}>
                                <h4>Сырный цыпленок</h4>
                                <span>тонкое тесто, 26см</span>
                            </div>
                        </div>
                        <div className={styles["item-right"]}>
                            <div className={styles.counter}>
                                <button className={styles.minus}>
                                    <img src="./img/minus.svg" alt="минус" />
                                </button>
                                <span>2</span>
                                <button className={styles.plus}>
                                    <img src="./img/plus.svg" alt="плюс" />
                                </button>
                            </div>
                            <span className={styles["item-price"]}>770 ₽</span>
                            <button className={styles.remove}>
                                <img src="./img/plus.svg" alt="крестик удалить" />
                            </button>
                        </div>
                    </li>
                    <li className={styles["product-item"]}>
                        <div className={styles["item-left"]}>
                            <img width={80} src="https://media.dodostatic.net/image/r:584x584/11EE7D610D2925109AB2E1C92CC5383C.avif" alt="пицца" />
                            <div className={styles.description}>
                                <h4>Сырный цыпленок</h4>
                                <span>тонкое тесто, 26см</span>
                            </div>
                        </div>
                        <div className={styles["item-right"]}>
                            <div className={styles.counter}>
                                <button className={styles.minus}>
                                    <img src="./img/minus.svg" alt="минус" />
                                </button>
                                <span>2</span>
                                <button className={styles.plus}>
                                    <img src="./img/plus.svg" alt="плюс" />
                                </button>
                            </div>
                            <span className={styles["item-price"]}>770 ₽</span>
                            <button className={styles.remove}>
                                <img src="./img/plus.svg" alt="крестик удалить" />
                            </button>
                        </div>
                    </li>
                </ul>
                <div className={styles.total}>
                    <div className={styles["total-pieces"]}>
                        Всего пицц: <span>3 шт.</span>
                    </div>
                    <div className={styles["total-price"]}>
                        Сумма заказа: <span>900 ₽</span>
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
    ); 
};
