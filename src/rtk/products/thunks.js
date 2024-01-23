import { createAsyncThunk } from '@reduxjs/toolkit';
import { get } from '../../utils';

 
 

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    const response = await get(
      `/products`,
    );
    return response;
  },
);

 