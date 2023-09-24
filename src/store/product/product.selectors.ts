import { ProductStateModel } from '../../models/state/product-state.model';
import { RootState } from '../store';

const selectProductState: (state: RootState) => ProductStateModel = (state: RootState) => state.products;

export const selectProducts = (state: RootState) => selectProductState(state).products;
export const selectLoading = (state: RootState) => state.products.loading;
export const selectError = (state: RootState) => state.products.error;
