import { memo, FC } from 'react';
import { SList, SListItem } from '../../../assets/styles/product-list.styles';
import { ProductModel } from '../../../models/product.model';
import ProductCard from '../card/product-card.component';

type ProductListProps = { products: ProductModel[] };

const ProductList: FC<ProductListProps> = memo(({ products }) => {
    return (
        <SList>
            {products.map(({ id, title, image, description, price }) => {
                return (
                    <SListItem key={id}>
                        <ProductCard id={id} title={title} image={image} description={description} price={price} />
                    </SListItem>
                );
            })}
        </SList>
    );
});

export default ProductList;
