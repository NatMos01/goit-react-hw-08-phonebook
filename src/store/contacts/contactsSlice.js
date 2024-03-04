import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from '../operations';

const initialState = {
    items: [],
};
const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder

            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.items = action.payload;
            })
            .addCase(addContact.fulfilled, (state, action) => {

                state.items.push(action.payload);
            })
            .addCase(deleteContact.fulfilled, (state, action) => {

                const index = state.items.findIndex(
                    item => item.id === action.payload.id
                );
                state.items.splice(index, 1);
            })

    },
});

export const contactReducer = contactSlice.reducer;