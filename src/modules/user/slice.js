import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'user',
  initialState: {
    value: 0,
  },
  reducers: {
    setUsername: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setUsername } = slice.actions;
export default slice.reducer;
