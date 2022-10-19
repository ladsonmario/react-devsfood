import { createSlice, Slice } from '@reduxjs/toolkit';

type InitialStateType = {
    token: string;
    name: string;
}

const initialState: InitialStateType = {
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