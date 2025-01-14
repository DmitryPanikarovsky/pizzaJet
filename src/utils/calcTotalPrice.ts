import { CartItem } from "../redux/slices/cartSlice";

export const calcTotalPrice = (cartPizzas: CartItem[]) => {
    return cartPizzas.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};
