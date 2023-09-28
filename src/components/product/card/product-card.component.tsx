import { memo, FC, useCallback } from 'react';
import { ProductModel } from '../../../models/product.model';
import {
    // SHeading,
    SContainer,
    SCardWrap,
    SImageWrap,
    SContentWrap,
    SPrice,
} from '../../../assets/styles/product-card.styles';
import Description from './Description';
import { SDeleteButton } from '../../../assets/styles/product-card.styles';
import DustbinSvg from '../../../assets/icons/delete.svg';
import { selectProducts } from '../../../store/product/product.selectors';
import { useAppSelector } from '../../../hooks/typedHooks';

// type ProductCardProps = ProductModel;

interface IProductCardProps {
    id: ProductModel['id'];
    title: ProductModel['title'];
    image: ProductModel['image'];
    price: ProductModel['price'];
    description: ProductModel['description'];
    onClick: (arr: ProductModel[]) => void;
}

const ProductCard: FC<IProductCardProps> = memo(({ id, title, image, price, description, onClick }) => {
    const maxLength: number = 150;

    const products = useAppSelector(selectProducts);

    const onDelete = useCallback((id: ProductModel['id']) => {
        const deletedProducts = products.filter(p => p.id !== id);
        onClick(deletedProducts);
        // console.log(id);
    }, []);

    return (
        <SContainer>
            {/* <SHeading>Product Card</SHeading> */}

            <SCardWrap>
                <SImageWrap>
                    <img style={{ width: '100%', height: '100%' }} src={image} alt={title} />
                </SImageWrap>
                <SContentWrap>
                    <h4>{title}</h4>
                    <Description text={description} maxLength={maxLength} />
                </SContentWrap>
                <SDeleteButton type='button' onClick={() => onDelete(id)} title='Delete item'>
                    <img src={DustbinSvg} alt='dustbin' />
                </SDeleteButton>
                <SPrice>${price}</SPrice>
            </SCardWrap>
        </SContainer>
    );
});

export default memo(ProductCard);
