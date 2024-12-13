import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        totalPrice: 0,
        cartPizzas: [],
    },
    reducers: {
        addPizzasInCart(state, action) {
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
        decreasePizzaCount(state, action) {
            const findItem = state.cartPizzas.find((obj) => obj.id === action.payload);

            if (findItem) {
                findItem.count--;
                state.totalPrice = state.totalPrice - findItem.price;
            }

            if (findItem.count === 0) {
                state.cartPizzas = state.cartPizzas.filter((obj) => obj.id !== action.payload);
            }
        },

        removePizzasOutCart(state, action) {
            state.cartPizzas = state.cartPizzas.filter((obj) => obj.id !== action.payload);
            state.totalPrice = state.cartPizzas.reduce((sum, obj) => obj.price * obj.count + sum, 0);
        },
        cleanCart(state) {
            state.cartPizzas = [];
            state.totalPrice = 0;
        },
    },
});

export const selectCart = (state) => state.cartReducer;

export const selectCartItemById = (id) => (state) => state.cartReducer.cartPizzas.find((obj) => obj.id === id);

export const { addPizzasInCart, decreasePizzaCount, removePizzasOutCart, cleanCart } = cartSlice.actions;

export default cartSlice.reducer;
