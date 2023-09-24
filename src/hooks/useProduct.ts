import { useEffect } from 'react';
import { fetchProductsApi } from '../services/product-api.service';
import { useAppDispatch, useAppSelector } from './typedHooks';
import { selectProducts, selectLoading, selectError } from '../store/product/product.selectors';

export const useProduct = () => {
    const products = useAppSelector(selectProducts);
    const loading = useAppSelector(selectLoading);
    const error = useAppSelector(selectError);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProductsApi());
    }, [dispatch]);

    return {
        loading,
        error,
        products,
    };
};
