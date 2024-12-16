import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk("pizza/fetchPizzasStatus", async (params) => {
    const { currentPage, category, sortBy, order, search } = params;

    const { data } = await axios.get(
        `https://66f2d5e071c84d805876ef77.mockapi.io/pizzas?page=${currentPage}&limit=10&${category}&sortBy=${sortBy}&order=${order}${search}`
    );

    return data;
});

export const pizzaSlice = createSlice({
    name: "pizza",
    initialState: {
        items: [],
        status: "loading",
    },
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state) => {
            state.items = [];
            state.status = "loading";
        });
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = "success";
        });
        builder.addCase(fetchPizzas.rejected, (state) => {
            state.items = [];
            state.status = "error";
        });
    },
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
