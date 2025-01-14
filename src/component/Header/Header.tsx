import { Link, useLocation } from "react-router-dom";
import { Container } from "../Container/Container";
import styles from "./Header.module.scss";
import { useSelector } from "react-redux";
import { selectCart } from "../../redux/slices/cartSlice";
import { FC, useEffect, useRef } from "react";

export const Header: FC = () => {
    const { totalPrice, cartPizzas } = useSelector(selectCart);
    const totalCount = cartPizzas.reduce((sum: number, item: any) => sum + item.count, 0);
    const { pathname } = useLocation();
    const isMounted = useRef(false);

    useEffect(() => {
        if (isMounted.current) {
            const json = JSON.stringify(cartPizzas);
            localStorage.setItem("cart", json);
        }
        isMounted.current = true;
    }, [cartPizzas]);

    return (
        <header className={styles.header}>
            <Container>
                <div className={styles["header__content"]}>
                    <Link to={"/"}>
                        <div className={styles.logo}>
                            <img
                                width="64"
                                height="64"
                                src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/external-pizza-happy-new-year-wanicon-lineal-color-wanicon.png"
                                alt="external-pizza-happy-new-year-wanicon-lineal-color-wanicon"
                            />
                            <div>
                                <div className={styles["logo__title"]}>PizzaJet</div>
                                <div className={styles["logo__subtitle"]}>
                                    самая вкусная пицца во Вселенной
                                </div>
                            </div>
                        </div>
                    </Link>
                    {pathname !== "/cart" && (
                        <Link to={"/cart"}>
                            <div className={styles["button-cart"]}>
                                <div className={styles["button-cart__price"]}>
                                    {totalPrice}
                                    <span>₽</span>
                                </div>
                                <div className={styles["button-cart__delimiter"]}></div>
                                <div className={styles["button-cart__total"]}>
                                    <svg
                                        width="21"
                                        viewBox="0 0 31 31"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10.6667 28.7917C12.0014 28.7917 13.0833 27.7097 13.0833 26.375C13.0833 25.0403 12.0014 23.9583 10.6667 23.9583C9.33198 23.9583 8.25 25.0403 8.25 26.375C8.25 27.7097 9.33198 28.7917 10.6667 28.7917Z"
                                            stroke="#3F3F3F"
                                            strokeWidth="2.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M25.1667 28.7917C26.5014 28.7917 27.5833 27.7097 27.5833 26.375C27.5833 25.0403 26.5014 23.9583 25.1667 23.9583C23.832 23.9583 22.75 25.0403 22.75 26.375C22.75 27.7097 23.832 28.7917 25.1667 28.7917Z"
                                            stroke="#3F3F3F"
                                            strokeWidth="2.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M7.85117 8.24999H28.7916L26.7616 18.3879C26.6511 18.9442 26.3484 19.4439 25.9066 19.7996C25.4648 20.1553 24.912 20.3442 24.3449 20.3333H11.5728C10.9828 20.3383 10.4113 20.1273 9.96612 19.74C9.52095 19.3527 9.23286 18.8159 9.15617 18.2308L7.3195 4.31083C7.24334 3.72991 6.95872 3.19643 6.51862 2.80968C6.07852 2.42292 5.5129 2.20922 4.927 2.20833H2.20825"
                                            stroke="#3F3F3F"
                                            strokeWidth="2.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <span>{totalCount}</span>
                                </div>
                            </div>
                        </Link>
                    )}
                </div>
            </Container>
        </header>
    );
};
