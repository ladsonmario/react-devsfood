import { createSlice } from '@reduxjs/toolkit';

type InitialCartStateType = {
    products: string[];
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
        
    }
});

export const {  } = slice.actions;
export default slice.reducer;