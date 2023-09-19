import { memo } from 'react';
import ProductList from './product-list.component';
import { useProduct } from '../../../hooks/useProduct';

const ProductListContainer = memo(() => {
    const { products, loading, error } = useProduct();

    return (
        <>
            {!loading ? <ProductList products={products} /> : <h2 style={{ margin: '20rem auto' }}>...Loading</h2>}
            {!error ? <ProductList products={products} /> : <h2 style={{ margin: '20rem auto' }}>{error}</h2>}
        </>
    );
});

export default ProductListContainer;
