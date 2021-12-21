import { configureStore } from '@reduxjs/toolkit';
import { users } from '@speedingplanet/rest-server';
import usersReducer, { loadUsers } from './users-slice';

const store = configureStore( {
  reducer: {
    users: usersReducer,
  },
  devTools: { name: 'Users with Redux' },
} );

store.dispatch( loadUsers( users ) );

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
export { store };
