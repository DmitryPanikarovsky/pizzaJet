import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categoryId: 0,
    sortType: {
        name: "популярности",
        properties: "rating",
    },
};

export const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setCategoryId(state, action) {
            state.categoryId = action.payload;
        },
    }
});

export const { setCategoryId, setSortType } = filterSlice.actions;
export default filterSlice.reducer;
 