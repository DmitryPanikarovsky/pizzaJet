import { createSlice } from "@reduxjs/toolkit";

const State = {
    searchValue: "",
    categoryId: 0,
    currentPage: 1,
    sortType: {
        name: "популярности",
        properties: "rating",
    },
};

export const filterSlice = createSlice({
    name: "filters",
    initialState: State,
    reducers: {
        setCategoryId(state, action) {
            state.categoryId = action.payload ;
        },
        setSortType(state, action) {
            state.sortType = action.payload;
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload;
        },
        // setFilters(state, action) {
        //     state.categoryId = Number(action.payload.categoryId);
        //     state.currentPage = Number(action.payload.currentPage);
        //     state.sortType = action.payload.sortType;
        // }
    }
});

export const { setCategoryId, setSortType, setCurrentPage } = filterSlice.actions;
export default filterSlice.reducer;
 