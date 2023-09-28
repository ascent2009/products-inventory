import { memo, FC, useCallback } from 'react';
import Overlay from '../Overlay';
import Modal from '../Modal';
import ProductCreationForm from '../ProductCreationForm';
import { ProductModel } from '../../models/product.model';
import { useAppDispatch } from '../../hooks/typedHooks';
// import { createProductApi } from '../../services/product-api.service';
import { addNewProductAction } from '../../store/product/product.slice';

const ProductCreationContainer: FC<{ onClick: () => void }> = memo(({ onClick }) => {
    const dispatch = useAppDispatch();
    const handleCreateProduct = useCallback((product: Partial<ProductModel>) => {
        dispatch(addNewProductAction(product));
        // dispatch(addNewProductAction(createProductApi(product)));
    }, []);

    return (
        <>
            <Overlay onClick={onClick} />
            <Modal title='Create Product' onClick={onClick}>
                <ProductCreationForm onClick={onClick} onSubmit={handleCreateProduct} />
            </Modal>
        </>
    );
});

export default ProductCreationContainer;
