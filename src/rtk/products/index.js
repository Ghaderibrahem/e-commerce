import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./thunks";

const initialState = {
  products: [],
  addedToCart: [],
};

export const slice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const response = action?.payload;
      state.addedToCart = [
        ...state.addedToCart?.filter(
          (row) => row?.sale?.id !== response?.sale?.id
        ),
        response,
      ];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      const response = action.payload;
      if (response) state.products = response;
    });
  },
});
export const { addToCart } = slice.actions;

export default slice.reducer;
