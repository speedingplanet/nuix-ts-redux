import todosReducer from './todos-reducer';
import visbilityReducer from './visibility-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers } from '@reduxjs/toolkit';
import todos from '../todos-shared/todos';
import { loadTodos } from './todos-actions';

const rootReducer = combineReducers( {
  todos: todosReducer,
  visbility: visbilityReducer,
} );

let composeEnhancers = composeWithDevTools( { name: 'Todos Classic Redux' } );

const store = createStore( rootReducer, composeEnhancers() );
store.dispatch( loadTodos( todos ) );

export { store };
export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;
