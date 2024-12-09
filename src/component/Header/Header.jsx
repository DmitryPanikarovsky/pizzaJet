import { Link } from "react-router-dom";
import { Container } from "../Container/Container";
import styles from "./Header.module.scss";
import { useSelector } from "react-redux";

export const Header = () => {
    const { totalPrice, cartPizzas } = useSelector((state) => state.cartReducer);

    const totalCount = cartPizzas.reduce((sum, item) => sum + item.count, 0);


    return (
        <header className={styles.header}>
            <Container>
                <div className={styles["header__content"]}>
                    <Link to={"/"}>
                        <div className={styles.logo}>
                            <img
                                src="./img/pizza-logo.svg"
                                alt="Логотип пиццы"
                                className={styles["logo__pic"]}
                            />
                            <div>
                                <div className={styles["logo__title"]}>PizzaJet</div>
                                <div className={styles["logo__subtitle"]}>
                                    самая вкусная пицца во вселенной
                                </div>
                            </div>
                        </div>
                    </Link>
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
                </div>
            </Container>
        </header>
    );
};
