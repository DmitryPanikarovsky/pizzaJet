import { Link, useLocation } from "react-router-dom";
import { Container } from "../Container/Container";
import styles from "./Header.module.scss";
import { useSelector } from "react-redux";
import { selectCart } from "../../redux/slices/cartSlice";
import { FC } from 'react'

export const Header: FC = () => {
    const { totalPrice, cartPizzas } = useSelector(selectCart);

    const totalCount = cartPizzas.reduce((sum: number, item: any) => sum + item.count, 0);

    const { pathname } = useLocation();

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
                                    <img
                                        width="21"
                                        height="21"
                                        src="https://img.icons8.com/ios-filled/50/FD7E14/wicker-basket--v1.png"
                                        alt="wicker-basket--v1"
                                    />
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
