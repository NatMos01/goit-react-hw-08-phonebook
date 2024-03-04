import { createSlice } from "@reduxjs/toolkit";
import { logInThunk, logOutThunk, registerUserThunk } from "store/operations";

const initialState = {
    token: '',
    user: null,
    isLoggedIn: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(registerUserThunk.fulfilled, (state, { payload }) => {
                state.token = payload.token;
                state.user = payload.user;
                state.isLoggedIn = true
            })
            .addCase(logInThunk.fulfilled, (state, { payload }) => {
                state.token = payload.token;
                state.user = payload.user;
                state.isLoggedIn = true
            })
            .addCase(logOutThunk.fulfilled, (state, { payload }) => {
                state.token = '';
                state.user = null;
                state.isLoggedIn = false
            })


    }
});

export const authReducer = authSlice.reducer;