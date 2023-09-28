import axios, { AxiosResponse } from 'axios';
import { PRODUCTS_URL } from '../constants/api.constants';
import { ProductStateModel } from '../models/state/product-state.model';
import { ProductModel } from '../models/product.model';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProductsApi = createAsyncThunk<ProductStateModel[], void>('products/fetchProductsApi', async () => {
    const response: AxiosResponse<ProductStateModel[]> = await axios.get(PRODUCTS_URL);
    return response.data;
});

export const createProductApi = createAsyncThunk<Partial<ProductModel>>('products/createProductApi', async product => {
    const response = await axios.post(PRODUCTS_URL, product);
    return response.data;
});
