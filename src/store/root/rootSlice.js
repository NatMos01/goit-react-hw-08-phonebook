import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isLoading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'root',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addMatcher((action) => action.type.endsWith('/pending'),
                (state, action) => {
                    state.isLoading = true;
                    state.error = null;
                })
            .addMatcher((action) => action.type.endsWith('/rejected'),
                (state, action) => {
                    state.isLoading = false;
                    state.error = action.payload;
                })
            .addMatcher((action) => action.type.endsWith('/fulfilled'),
                (state, action) => {
                    state.isLoading = false;
                    state.error = null;
                })

    }
});

export const rootReducer = authSlice.reducer;