import { memo, useState } from 'react';
import ProductList from './product-list.component';
import { useProduct } from '../../../hooks/useProduct';
import ProductCreationContainer from '../ProductCreationContainer';
import CreateButton from '../CreateButton';
import { ProductModel } from '../../../models/product.model';

const ProductListContainer = memo(() => {
    const { products, loading, error } = useProduct();
    const [visible, setVisible] = useState(false);

    const handleDisplayModal = () => {
        setVisible(!visible);
    };

    return (
        <>
            {!loading ? <ProductList products={products} /> : <h2 style={{ margin: '20rem auto' }}>...Loading</h2>}
            {!error ? <ProductList products={products} /> : <h2 style={{ margin: '20rem auto' }}>{error}</h2>}
            {loading ? null : <CreateButton onClick={handleDisplayModal} />}
            {visible ? <ProductCreationContainer onClick={handleDisplayModal} /> : null}
        </>
    );
});

export default ProductListContainer;
