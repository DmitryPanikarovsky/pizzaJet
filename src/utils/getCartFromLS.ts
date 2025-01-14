import { calcTotalPrice } from './calcTotalPrice'

export const getCartFromLS = () => {
    const data = localStorage.getItem("cart");
    const cartPizzas = data ? JSON.parse(data) : [];
    const totalPrice = calcTotalPrice(cartPizzas);

    return {
        cartPizzas,
        totalPrice
    }
};