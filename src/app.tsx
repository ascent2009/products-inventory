// import React, { useState, useEffect } from 'react';
import { SApp } from './assets/styles/app.styles';
// import { ProductModel } from './models/product.model';
import { productListData } from './data/product.data';
import ProductCard from './components/product/card/product-card.component';
import ProductListContainer from './components/product/list/product-list.container';

function App() {
    return (
        <SApp>
            <ProductCard {...productListData[0]} />
            <ProductListContainer />;
            {/* <ol>
                {productListData.map(({ id, title, description, price, image }: ProductModel) => {
                    return (
                        <li key={id}>
                            <p>{title}</p>
                            <img src={image} alt={title} />
                            <p>{description}</p>
                            <p>{price}</p>
                        </li>
                    );
                })}
            </ol> */}
        </SApp>
    );
}

export default App;
