import { Container } from "../Container/Container";
import styles from "./Header.module.scss";

export const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles["header__content"]}>
                    <div className={styles.logo}>
                        <img src="./img/pizza-logo.svg" alt="Логотип пиццы" className={styles["logo__pic"]} />
                        <div>
                            <div className={styles["logo__title"]}>PizzaJet</div>
                            <div className={styles["logo__subtitle"]}>самая вкусная пицца во вселенной</div>
                        </div>
                    </div>
                    <div className={styles["button-cart"]}>
                        <div className={styles["button-cart__price"]}>
                            520 <span>₽</span>
                        </div>
                        <div className={styles["button-cart__delimiter"]}></div>
                        <div className={styles["button-cart__total"]}>
                            <img src="./img/cart-icon.svg" alt="Иконка корзины" />
                            <span>3</span>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
};
