import { User, UserProfile } from '@speedingplanet/rest-server';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum AsyncStatus {
  INITIAL = 'INITIAL',
  REQUESTED = 'REQUESTED',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
}

export type UsersState = {
  users: User[];
  filter: string; // required, empty string if there's no filter
  fetchStatus?: AsyncStatus;
};

const initialState: UsersState = {
  users: [],
  filter: '',
};

// load, add, filter
let usersSlice = createSlice( {
  name: 'users',
  initialState,
  reducers: {
    loadUsers( state, action: PayloadAction<User[]> ) {
      state.users = action.payload;
    },
    addUser( state, action: PayloadAction<UserProfile> ) {
      const user: User = {
        ...action.payload,
        id: String( Date.now() ),
        version: 1,
        lastUpdated: new Date(),
        active: true,
      };
      state.users.push( user );
    },
    setFilter( state, action: PayloadAction<string> ) {
      state.filter = action.payload;
    },
  },
} );

export const { addUser, loadUsers, setFilter } = usersSlice.actions;
export default usersSlice.reducer;
