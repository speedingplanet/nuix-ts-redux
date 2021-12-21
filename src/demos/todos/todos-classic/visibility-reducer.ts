import { AnyAction, Reducer } from '@reduxjs/toolkit';
import { Visibility } from '../todos-shared';

export type VisibilityState = {
  visibility: Visibility;
};

const defaultState: VisibilityState = {
  visibility: Visibility.Visible,
};

const reducer: Reducer<VisibilityState, AnyAction> = (
  state = defaultState,
  action,
) => {
  switch ( action.type ) {
  case 'TOGGLE_VISIBILITY':
    return {
      ...state,
      visibility:
          state.visibility === Visibility.Visible
            ? Visibility.Hidden
            : Visibility.Visible,
    };
  default:
    return state;
  }
};

export default reducer;
