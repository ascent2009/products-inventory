import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ProductStateModel } from '../../models/state/product-state.model';
import { fetchProductsApi } from '../../services/product-api.service';

const initialState: ProductStateModel = {
    products: [],
    error: '',
    loading: false,
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProductsAction: (state: ProductStateModel | any, action: PayloadAction<ProductStateModel>) =>
            (state.products = action.payload),
    },
    extraReducers: builder =>
        builder
            .addCase(fetchProductsApi.pending, (state: ProductStateModel | any) => {
                state.loading = true;
            })
            .addCase(fetchProductsApi.fulfilled, (state: ProductStateModel | any, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProductsApi.rejected, (state: ProductStateModel | any, error) => {
                state.error = `Something went wrong! Error: ${error.meta.requestStatus}`;
                state.loading = false;
            }),
});

export const { setProductsAction } = productsSlice.actions;
export default productsSlice.reducer;
