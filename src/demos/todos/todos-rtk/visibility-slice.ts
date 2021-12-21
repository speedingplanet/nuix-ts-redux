import { createSlice } from '@reduxjs/toolkit';
import { Visibility } from '../todos-shared';

export type VisibilityState = {
  visibility: Visibility;
};

const initialState: VisibilityState = {
  visibility: Visibility.Visible,
};

const visibilitySlice = createSlice( {
  name: 'visibility',
  initialState,
  reducers: {
    toggleVisibility( state ) {
      if ( state.visibility === Visibility.Visible ) {
        state.visibility = Visibility.Hidden;
      } else {
        state.visibility = Visibility.Visible;
      }
    },
  },
} );

export const { toggleVisibility } = visibilitySlice.actions;
export default visibilitySlice.reducer;
