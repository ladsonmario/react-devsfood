import { createSlice } from '@reduxjs/toolkit';

export type InitialUserStateType = {
    token: string;
    name: string;
}

const initialState: InitialUserStateType = {
    token: '',
    name: ''
}

const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setInfoUser: (state, action) => {
            state.name = action.payload.name;
            state.token = action.payload.token;
        }
    }
});

export const { setInfoUser } = slice.actions;
export default slice.reducer;