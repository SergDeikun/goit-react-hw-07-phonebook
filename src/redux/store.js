import { configureStore } from '@reduxjs/toolkit';

import filter from './filter';
import contacts from './contacts';
import { contactsApi } from './contactsApiSlice/contactsSlice';

export const store = configureStore({
  reducer: {
    filter,
    contacts,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
