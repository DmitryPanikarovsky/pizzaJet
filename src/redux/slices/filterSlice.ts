import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type Sort = {
    name: string;
    sortProperty: "rating" | "price" | "-price" | "title";
}

interface FilterSliceState {
    searchValue: string;
    categoryId: number;
    currentPage: number;
    sort: Sort;
}

const initialState: FilterSliceState = {
    searchValue: "",
    categoryId: 0,
    currentPage: 1,
    sort: {
        name: "популярности",
        sortProperty: "rating",
    },
};

export const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setCategoryId(state, action: PayloadAction<number>) {
            state.categoryId = action.payload;
        },
        setSortType(state, action: PayloadAction<Sort>) {
            state.sort = action.payload;
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        },
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload;
        },
    },
});

export const selectFilter = (state: RootState) => state.filterReducer;

export const { setCategoryId, setSortType, setCurrentPage, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
