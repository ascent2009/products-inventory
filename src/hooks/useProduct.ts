import { useState, useEffect } from 'react';
import { ProductModel } from '../models/product.model';
import { fetchProductsApi } from '../services/product-api.service';

export const useProduct = () => {
    const [products, setProducts] = useState<ProductModel[]>([]);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    async function fetchProducts() {
        try {
            const response = await fetchProductsApi();
            setProducts(response.data);
        } catch (e) {
            setError(`Something went wrong! Error: ${e}`);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        setLoading(true);
        fetchProducts();
    }, []);

    return {
        loading,
        error,
        products
    }
};
