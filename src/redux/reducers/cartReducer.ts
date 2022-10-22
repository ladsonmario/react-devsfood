import { createSlice } from '@reduxjs/toolkit';
import { ProductsType } from '../../types/types';

type InitialCartStateType = {
    products: ProductsType[];
    address: string[];
    discount: number;
    delivery: number;
}

const initialState: InitialCartStateType = {
    products: [],
    address: [],
    discount: 0,
    delivery: 0    
}

const slice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setAddProduct: (state, action) => {                                                 
            const products: ProductsType[] = [...state.products];            

            const id: number = action.payload.data.id;            

            const index: number = products.findIndex(item => item.id === id);           

            if(index !== -1) {                                
                products[index].qt += action.payload.qt;
                return;                                 
            } else {
                products.push({
                    ...action.payload.data,
                    qt: action.payload.qt
                });                                
            }           

            return {...state, products};
        },
        setMinusQtProduct: (state, action) => {
            const id: number = action.payload;

            const index: number = state.products.findIndex(item => item.id === id);
            let qt = state.products[index].qt as number - 1;
            
            if(qt === 0) {
                let newArrayProducts = state.products.filter(item => item.id !== id);  
                return { ...state, products: newArrayProducts};
            }

            if(index !== -1 && qt >= 1) {                
                state.products[index].qt = qt;
                return;
            }            
        },
        setPlusQtProduct: (state, action) => {
            const id: number = action.payload;

            const index: number = state.products.findIndex(item => item.id === id);
            let qt = state.products[index].qt as number + 1;

            if(index !== -1) {                
                state.products[index].qt = qt;                
            }
        }
    }
});

export const { setAddProduct, setMinusQtProduct, setPlusQtProduct } = slice.actions;
export default slice.reducer;