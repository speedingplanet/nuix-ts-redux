import { createSlice, configureStore } from '@reduxjs/toolkit';
// Import the logger to see reducer execution logged to the console
// import logger from 'redux-logger';

const counterSlice = createSlice( {
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: ( state ) => state + 1,
    decrement: ( state ) => state - 1,
  },
} );

export const store = configureStore( {
  reducer: counterSlice.reducer,
  devTools: { name: 'Counter Redux Toolkit' },
} );
export type ReduxState = ReturnType<typeof reducer>;

const { actions, reducer } = counterSlice;
export const { increment, decrement } = actions;
