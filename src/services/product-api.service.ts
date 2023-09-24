import axios, { AxiosResponse } from 'axios';
import { PRODUCTS_URL } from '../constants/api.constants';
import { ProductStateModel } from '../models/state/product-state.model';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProductsApi = createAsyncThunk<ProductStateModel[], void>('products/fetchProductsApi', async () => {
    const response: AxiosResponse<ProductStateModel[]> = await axios.get(PRODUCTS_URL);
    return response.data;
});
