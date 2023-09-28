import { memo, FC, useCallback } from 'react';
import { SList, SListItem } from '../../../assets/styles/product-list.styles';
import { ProductModel } from '../../../models/product.model';
import ProductCard from '../card/product-card.component';
import { useAppDispatch } from '../../../hooks/typedHooks';
import { deleteProductAction } from '../../../store/product/product.slice';

type ProductListProps = { products: ProductModel[] };

const ProductList: FC<ProductListProps> = memo(({ products }) => {
    const dispatch = useAppDispatch();
    const handleDelete = useCallback(
        (arr: ProductModel[]) => {
            dispatch(deleteProductAction(arr));
        },
        [dispatch]
    );
    return (
        <SList>
            {products.map(({ id, title, image, description, price }) => {
                return (
                    <SListItem key={id}>
                        <ProductCard
                            id={id}
                            title={title}
                            image={image}
                            description={description}
                            price={price}
                            onClick={handleDelete}
                        />
                    </SListItem>
                );
            })}
        </SList>
    );
});

export default ProductList;
