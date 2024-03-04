import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
    persistStore, persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import { filterReducer } from './filter/contactsFilterSlice';
import { contactReducer } from './contacts/contactsSlice';
import { authReducer } from './auth/authSlice';
import { rootReducer } from './root/rootSlice';

import storage from 'redux-persist/lib/storage'


const persistConfigAuth = {
    key: 'token',
    storage,
}
const persistedReducerAuth = persistReducer(persistConfigAuth, authReducer)



const reducer = combineReducers({
    contacts: contactReducer,
    filter: filterReducer,
    auth: persistedReducerAuth,
    root: rootReducer
});

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
export const persistor = persistStore(store)