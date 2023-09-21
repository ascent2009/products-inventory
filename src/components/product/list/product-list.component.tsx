import { memo, FC } from 'react';
import { SList, SListItem, SContentWrapper, SPrice, SImageWrapper } from '../../../assets/styles/product-list.styles';
import { ProductModel } from '../../../models/product.model';

type ProductListProps = { products: ProductModel[] };

const ProductList: FC<ProductListProps> = memo(({ products }) => {
    return (
        <SList>
            {products.map(({ id, title, image, description, price }) => {
                return (
                    <SListItem>
                        <SImageWrapper>
                            <img src={image} alt={title} style={{ width: '100%', height: '100%' }} />
                        </SImageWrapper>
                        <SContentWrapper>
                            <h4>{title}</h4>
                            <p style={{ textAlign: 'left' }}>{description}</p>
                        </SContentWrapper>
                        <SPrice>${price}</SPrice>
                    </SListItem>
                );
            })}
        </SList>
    );
});

export default ProductList;
