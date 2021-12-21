import { configureStore } from '@reduxjs/toolkit';
import todos from '../todos-shared/todos';
import todosReducer, { loadTodos } from './todos-slice';
import visibilityReducer from './visibility-slice';

const store = configureStore( {
  reducer: {
    visibility: visibilityReducer,
    todos: todosReducer,
  },
  devTools: { name: 'Todos Redux Toolkit' },
} );

store.dispatch( loadTodos( todos ) );

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;

export { store };
