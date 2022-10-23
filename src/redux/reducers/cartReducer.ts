import { createSlice } from '@reduxjs/toolkit';
import { ProductsType, AddressType } from '../../types/types';

type InitialCartStateType = {
    products: ProductsType[];
    address: AddressType;
    discount: number;
    delivery: number;
}

const initialState: InitialCartStateType = {
    products: [],
    address: {} as AddressType,
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
        setQtProduct: (state, action) => {             
            const index: number = state.products.findIndex(item => item.id === action.payload.id);
            let qt: number = state.products[index].qt as number;

            switch(action.payload.typeQt) {
                case '-':
                    if((qt - 1) <= 0) {
                        let newArrayProducts = state.products.filter(item => item.id !== action.payload.id);  
                        return { ...state, products: newArrayProducts};
                    }
        
                    if(index !== -1 && qt >= 1) {                
                        state.products[index].qt = qt - 1;
                        return;
                    }
                break;
                case '+': 
                    if(index !== -1) {                
                        state.products[index].qt = qt + 1;                
                    }
                break;
            }
        },
        setAddress: (state, action) => {
            state.address = {
                cityStateZipcode: action.payload.cityStateZipcode,
                streetAndNumber: action.payload.streetAndNumber,
                workAndHouse: action.payload.workAndHouse
            }
        }
    }
});

export const { setAddProduct, setQtProduct, setAddress } = slice.actions;
export default slice.reducer;