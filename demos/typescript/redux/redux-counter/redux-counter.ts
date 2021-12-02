import { AnyAction, createStore, Reducer } from '@reduxjs/toolkit';

// What does our state look like?
// Initial state
type ReduxState = {
  counter: number;
};

// let initialState: ReduxState = { counter: 1 };
let initialState = { counter: 1 };
// let initialState: { counter: number | string } = { counter: 1 };

// How do we want to change that state?
// Action(s)
let incrementAction = { type: 'INCREMENT' };

// How do we implement/apply changes?
const reducer: Reducer<ReduxState, AnyAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    default:
      return state;
  }
};

// How do we bring these tools together?
const store = createStore(reducer, initialState);
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
store.dispatch({ type: 'DECREMENT' });
store.dispatch(incrementAction);
store.dispatch(incrementAction);
store.dispatch(incrementAction);
