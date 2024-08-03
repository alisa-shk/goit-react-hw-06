import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';


export const store = configureStore({
    reducer: {
        // counter: counterReducer,
        contacts: contactsReducer,
        filters: filtersReducer,
    },
})