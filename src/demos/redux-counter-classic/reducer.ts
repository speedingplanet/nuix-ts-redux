import { AnyAction, Reducer } from '@reduxjs/toolkit';
import { actions } from './actions';

export type ReduxState = { counter: number };
const initialState: ReduxState = { counter: 1 };

const reducer: Reducer<ReduxState, AnyAction> = (
  state = initialState,
  action,
) => {
  switch ( action.type ) {
  case actions.INCREMENT:
    return { counter: state.counter + 1 };
  case actions.DECREMENT:
    return { counter: state.counter - 1 };
  default:
    return state;
  }
};

export default reducer;
