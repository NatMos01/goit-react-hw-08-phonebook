import { createAsyncThunk } from '@reduxjs/toolkit';
import { clearAuthHeader, logIn, logOut, registerUser, setAuthHeader } from 'api/auth';
import { addSingleContact, deleteSingleContact, fetchAllContacts } from 'api/contacts';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            setAuthHeader(thunkAPI.getState().auth.token);

            const response = await fetchAllContacts()
            return response


        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
export const addContact = createAsyncThunk(
    'contacts/addContact',
    async ({ name, number }, thunkAPI) => {
        try {
            const response = await addSingleContact({ name, number })
            return response
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
        try {
            const response = await deleteSingleContact(contactId)
            return response
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const registerUserThunk = createAsyncThunk(
    'auth/registration',
    async (data, thunkAPI) => {
        try {
            const response = await registerUser(data)
            setAuthHeader(response.token)
            return response
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const logInThunk = createAsyncThunk(
    'auth/login',
    async (data, thunkAPI) => {
        try {
            const response = await logIn(data)
            setAuthHeader(response.token)
            return response
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const logOutThunk = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            const response = await logOut()
            clearAuthHeader()
            return response
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)