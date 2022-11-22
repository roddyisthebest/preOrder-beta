import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type initialStateProps = {
  isLoggedIn: boolean;
};

const {actions, reducer} = createSlice({
  name: 'store',
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    setAuth: (state, {payload}: PayloadAction<boolean>) => ({
      ...state,
      isLoggedIn: payload,
    }),
  },
});

export const {setAuth} = actions;
export default reducer;
