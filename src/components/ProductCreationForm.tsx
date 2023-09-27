import { FC, memo, useState, useCallback, ChangeEvent, FormEvent } from 'react';
import { SForm, SInputGroup, SFormButton } from '../assets/styles/modal.styled';
import NoImagePng from '../assets/icons/No_Image.png';
import Input from './Input';
import { ProductModel } from '../models/product.model';

const ProductCreationForm: FC<{ onClick: () => void; onSubmit: (product: Partial<ProductModel>) => void }> = memo(
    ({ onClick, onSubmit }) => {
        const inputClass = '';
        const defaultValue = { title: '', description: '' };
        const [innerValue, setInnerValue] = useState(defaultValue);
        const [warnTitle, setWarnTitle] = useState(false);

        const handleChange = useCallback(
            (e: ChangeEvent<HTMLInputElement>) => {
                const { name, value } = e.target;
                setInnerValue({ ...innerValue, [name]: value });
            },
            [innerValue]
        );

        const handleSubmit = useCallback(
            (e: FormEvent) => {
                e.preventDefault();

                const newProduct = {
                    id: Math.random().toString(),
                    title: innerValue.title,
                    description: innerValue.description,
                    image: 'https://www.hnstools.com/images/No_Image.png',
                    price: 100.0,
                };
                if (!innerValue.title) {
                    setWarnTitle(true);
                    return;
                } else {
                    onSubmit(newProduct);
                    setInnerValue(defaultValue);
                    setWarnTitle(false);
                    onClick();
                }
            },
            [innerValue]
        );
        return (
            <SForm onSubmit={handleSubmit}>
                <SInputGroup>
                    <label htmlFor='title'>Enter title</label>
                    <Input
                        innerClassName={inputClass}
                        innerValue={innerValue.title}
                        name='title'
                        onChange={handleChange}
                        id='title'
                    />
                    {!innerValue.title ? (
                        <div
                            style={{
                                position: 'absolute',
                                margin: 'auto',
                                top: '100%',
                                width: '100%',
                                color: 'red',
                                fontWeight: 'bold',
                                fontSize: '1.3rem',
                                zIndex: 3,
                                background: 'transparent',
                            }}
                        >
                            {warnTitle ? 'Warning! Empty title field!!!' : null}
                        </div>
                    ) : null}
                </SInputGroup>

                <SInputGroup>
                    <label htmlFor='description'>Enter description</label>
                    <Input
                        innerClassName={inputClass}
                        innerValue={innerValue.description}
                        name='description'
                        onChange={handleChange}
                        id='description'
                    />
                </SInputGroup>
                <SFormButton type='submit'>Create</SFormButton>
            </SForm>
        );
    }
);

export default ProductCreationForm;
