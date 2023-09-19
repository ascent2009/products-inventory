import React, { memo, FC } from 'react';
import { ProductModel } from '../../../models/product.model';
import {
    SHeading,
    SContainer,
    SCardWrap,
    SImageWrap,
    SContentWrap,
    SPrice,
} from '../../../assets/styles/product-card.styles';

type ProductCardProps = ProductModel;

const ProductCard: FC<ProductCardProps> = memo(({ title, image, price, description }) => {
    return (
        <SContainer>
            <SHeading>Product Card</SHeading>

            <SCardWrap>
                <SImageWrap>
                    <img style={{ width: '100%', height: '100%' }} src={image} alt={title} />
                </SImageWrap>
                <SContentWrap>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </SContentWrap>

                <SPrice>${price}</SPrice>
            </SCardWrap>
        </SContainer>
    );
});

export default memo(ProductCard);
