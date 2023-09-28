import { SApp } from './assets/styles/app.styles';
// import { productListData } from './data/product.data';
// import ProductCard from './components/product/card/product-card.component';
import ProductListContainer from './components/product/list/product-list.container';

function App() {
    return (
        <SApp>
            {/* <ProductCard {...productListData[0]} /> */}
            <ProductListContainer />;
        </SApp>
    );
}

export default App;
