import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from '../store'

export type CartItem = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    type: string;
    size: number;
    count: number;
}

interface CartSliceState {
    totalPrice: number;
    cartPizzas: CartItem[]; 
}

const initialState: CartSliceState = {
    totalPrice: 0,
    cartPizzas: [],
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addPizzasInCart(state, action: PayloadAction<CartItem>) {
            const findItem = state.cartPizzas.find((obj) => obj.id === action.payload.id);

            if (findItem) {
                findItem.count++;
            } else {
                state.cartPizzas.push({
                    ...action.payload,
                    count: 1,
                });
            }

            state.totalPrice = state.cartPizzas.reduce((sum, obj) => obj.price * obj.count + sum, 0);
        },
        decreasePizzaCount(state, action: PayloadAction<string>) {
            const findItem = state.cartPizzas.find((obj) => obj.id === action.payload);

            if (findItem) {
                findItem.count--;
                state.totalPrice = state.totalPrice - findItem.price;
            }

            if (findItem?.count === 0) {
                state.cartPizzas = state.cartPizzas.filter((obj) => obj.id !== action.payload);
            }
        },

        removePizzasOutCart(state, action: PayloadAction<string>) {
            state.cartPizzas = state.cartPizzas.filter((obj) => obj.id !== action.payload);
            state.totalPrice = state.cartPizzas.reduce((sum, obj) => obj.price * obj.count + sum, 0);
        },
        cleanCart(state) {
            state.cartPizzas = [];
            state.totalPrice = 0;
        },
    },
});

export const selectCart = (state: RootState) => state.cartReducer;

export const selectCartItemById = (id: string) => (state: RootState) =>
    state.cartReducer.cartPizzas.find((obj) => obj.id === id);

export const { addPizzasInCart, decreasePizzaCount, removePizzasOutCart, cleanCart } = cartSlice.actions;

export default cartSlice.reducer;
