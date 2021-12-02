import { createStore } from '@reduxjs/toolkit';
import counterReducer, { ReduxState } from './counter-reducer';
import {
  incrementAction,
  decrementAction,
  add,
} from './counter-action-creator';

const store = createStore(counterReducer);
let lastState: ReduxState;
store.subscribe(() => {
  let currentState = store.getState();
  if (currentState !== lastState) {
    console.log('State was updated:', currentState);
  } else {
    console.log('No update');
  }

  lastState = currentState;
});

store.dispatch(incrementAction);
store.dispatch(incrementAction);
store.dispatch(decrementAction);
store.dispatch(add(10));
store.dispatch(incrementAction);
store.dispatch(incrementAction);
