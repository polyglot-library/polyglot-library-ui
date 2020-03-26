import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'ui',
  initialState: {
    screenSize: {
      width: window.innerWidth,
      height: window.innerHeight
    },
  },
  reducers: {
    setScreenSize: (state, action) => {
      console.info(action)
      state.screenSize = action.payload;
    },
  },
});

export const { setScreenSize } = slice.actions;
export default slice.reducer;
