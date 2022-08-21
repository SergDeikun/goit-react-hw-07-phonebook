import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {
    addContact: (state, action) => {
      state.items = [...state.items, action.payload];
    },

    removeContact: (state, { payload: id }) => {
      state.items = state.items.filter(item => item.id !== id);
    },
  },
});

export const { addContact, removeContact, getVisibleContacts } =
  contactsSlice.actions;

export default contactsSlice.reducer;
