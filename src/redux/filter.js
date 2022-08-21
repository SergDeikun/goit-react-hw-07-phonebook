import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

export const filterClice = createSlice({
  name: 'filter',
  initialState,

  reducers: {
    setFilter: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setFilter } = filterClice.actions;
export default filterClice.reducer;
