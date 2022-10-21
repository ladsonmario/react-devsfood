import { createSlice } from '@reduxjs/toolkit';

type InitialUserStateType = {
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
        setName: (state, action) => {
            state.name = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        }
    }
});

export const { setName, setToken } = slice.actions;
export default slice.reducer;