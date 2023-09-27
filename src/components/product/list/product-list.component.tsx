import { memo, FC } from 'react';
import { SList, SListItem } from '../../../assets/styles/product-list.styles';
import { ProductModel } from '../../../models/product.model';
import ProductCard from '../card/product-card.component';

type ProductListProps = { products: ProductModel[] };

const ProductList: FC<ProductListProps> = memo(({ products }) => {
    // const handleDelete = (e: React.MouseEventHandler<HTMLButtonElement>) => {
    //     console.log((e.target as HTMLElement).id);
    // };
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
                            // onClick={e => handleDelete(e, e.target.id)}
                        />
                    </SListItem>
                );
            })}
        </SList>
    );
});

export default ProductList;
