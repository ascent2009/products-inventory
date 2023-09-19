import { memo, FC } from 'react';
import { ProductModel } from '../../../models/product.model';

type ProductListProps = { products: ProductModel[] };

const ProductList: FC<ProductListProps> = memo(({ products }) => {
    return (
        <ul style={{ width: '80%', margin: 'auto' }}>
            {products.map(({ id, title, image, description, price }) => {
                return (
                    <li
                        key={id}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            margin: '2rem auto',
                        }}
                    >
                        <div style={{ width: '20%', height: '20%' }}>
                            <img src={image} alt={title} style={{ width: '100%', height: '100%' }} />
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                width: '50%',
                                alignItems: 'flex-start',
                            }}
                        >
                            <h4>{title}</h4>
                            <p style={{ textAlign: 'left' }}>{description}</p>
                        </div>
                        <p>${price}</p>
                    </li>
                );
            })}
        </ul>
    );
});

export default ProductList;
