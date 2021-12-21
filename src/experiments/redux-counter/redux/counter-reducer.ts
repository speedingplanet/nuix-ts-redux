import { AnyAction, Reducer } from '@reduxjs/toolkit';
import actions from './counter-actions';

export type ReduxState = {
  counter: number;
};

let initialState = { counter: 1 };

const reducer: Reducer<ReduxState, AnyAction> = (
  state = initialState,
  action,
) => {
  switch ( action.type ) {
  case actions.INCREMENT:
    return { ...state, counter: state.counter + 1 };
  case actions.DECREMENT:
    return { ...state, counter: state.counter - 1 };
  case actions.ADD:
    return {
      ...state,
      counter: state.counter + Number( action.payload.amount ),
    };

  default:
    return state;
  }
};

export default reducer;
