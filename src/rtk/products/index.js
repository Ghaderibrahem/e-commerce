import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./thunks";

const initialState = {
  products: [],
};

export const slice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      const response = action.payload;
      if (response) state.products = response;
    });
  },
});
export const {} = slice.actions;

export default slice.reducer;
