import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type initialStateProps = {
  test: string;
};

const {actions, reducer} = createSlice({
  name: 'store',
  initialState: {
    test: 'test',
    one: 'test',
  },
  reducers: {
    setTest: (state, {payload}: PayloadAction<string>) => ({
      ...state,
      test: payload,
    }),
  },
});

export const {setTest} = actions;
export default reducer;
