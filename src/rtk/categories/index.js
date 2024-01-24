import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./thunks";

const initialState = {
  categories: [],
};

export const slice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      const response = action.payload;
      if (response) state.categories = response;
    });
  },
});
export const {} = slice.actions;

export default slice.reducer;
