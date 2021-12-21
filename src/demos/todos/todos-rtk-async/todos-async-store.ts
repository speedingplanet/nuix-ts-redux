import { configureStore } from '@reduxjs/toolkit';
import todosReducer, { fetchTodos } from './todos-async-slice';

// No need to re-implement this
import visibilityReducer from '../todos-rtk/visibility-slice';

const store = configureStore( {
  reducer: {
    visibility: visibilityReducer,
    todos: todosReducer,
  },
  devTools: { name: 'Todos Redux Toolkit Async' },
} );

void store.dispatch( fetchTodos() );

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;

export { store };
