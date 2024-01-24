import { createAsyncThunk } from "@reduxjs/toolkit";
import { get } from "../../utils";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async () => {
    const response = await get(`/categories`);
    return response;
  }
);
