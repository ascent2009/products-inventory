import axios, { AxiosResponse } from 'axios';
import { PRODUCTS_URL } from '../constants/api.constants';
import { ProductModel } from '../models/product.model';

export const fetchProductsApi = async (): Promise<AxiosResponse<ProductModel[]>> => {
    return await axios.get(PRODUCTS_URL);
};
