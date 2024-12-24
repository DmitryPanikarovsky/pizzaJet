import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import axios from "axios";

export type PizzaItem = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    type: number;
    size: number;
    count: number;
};

export type SearchPizzaParams = {
    currentPage: number;
    category: string;
    sortBy: string;
    order: string;
    search: string;
};

export enum Status {
    LOADING = "loading",
    SUCCESS = "success",
    ERROR = "error",
}

interface PizzaSliceState {
    items: PizzaItem[];
    status: Status;
}

const initialState: PizzaSliceState = {
    items: [],
    status: Status.LOADING,
};

export const fetchPizzas = createAsyncThunk<PizzaItem[], SearchPizzaParams>(
    "pizza/fetchPizzasStatus",
    async (params) => {
        const { currentPage, category, sortBy, order, search } = params;

        const { data } = await axios.get<PizzaItem[]>(
            `https://66f2d5e071c84d805876ef77.mockapi.io/pizzas?page=${currentPage}&limit=10&${category}&sortBy=${sortBy}&order=${order}${search}`
        );

        return data;
    }
);

export const pizzaSlice = createSlice({
    name: "pizza",
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<PizzaItem[]>) {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state) => {
            state.items = [];
            state.status = Status.LOADING;
        });
        builder.addCase(fetchPizzas.fulfilled, (state, action: PayloadAction<PizzaItem[]>) => {
            state.items = action.payload;
            state.status = Status.SUCCESS;
        });
        builder.addCase(fetchPizzas.rejected, (state) => {
            state.items = [];
            state.status = Status.ERROR;
        });
    },
});

export const selectPizzaData = (state: RootState) => state.pizzaReducer;

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
