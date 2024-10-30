import { Link } from "react-router-dom";
import { Container } from "../Container/Container";
import styles from "./Header.module.scss";
import { Search } from '../Search/Search'

export const Header = ({ searchValue, setSearchValue }) => {
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
                    <div className={styles["header__right"]}>
                        <Search />
                        <Link to={"/cart"}>
                            <div className={styles["button-cart"]}>
                                <div className={styles["button-cart__price"]}>
                                    520 <span>₽</span>
                                </div>
                                <div className={styles["button-cart__delimiter"]}></div>
                                <div className={styles["button-cart__total"]}>
                                    {/* <img src="./img/cart-icon.svg" alt="Иконка корзины" /> */}
                                    <img
                                        width="21"
                                        height="21"
                                        src="https://img.icons8.com/ios-filled/50/FD7E14/wicker-basket--v1.png"
                                        alt="wicker-basket--v1"
                                    />
                                    <span>3</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </Container>
        </header>
    );
};
