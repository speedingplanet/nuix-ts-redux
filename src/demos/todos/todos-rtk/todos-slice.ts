import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../todos-shared';

type ById = {
  [id: number]: Todo;
};

/*
  state = {
    byId: {
      1: {
        text: 'Do this',
        completed: false,
        id: 1
      },
      2: ...
    }
  }

  Or use normalizr
*/
export type TodosState = {
  byId: ById;
  allIds: number[];
  nextTodoId: number;
};

const initialState: TodosState = { byId: {}, allIds: [], nextTodoId: 6 };

const todosSlice = createSlice( {
  name: 'todos',
  initialState,
  reducers: {
    loadTodos( state, action: PayloadAction<Todo[]> ) {
      let todos = action.payload;
      let byId = todos.reduce<ById>( ( collection, todo ) => {
        collection[ todo.id ] = todo;
        return collection;
      }, {} );

      let allIds = Object.keys( byId ).map( Number );

      // Immer turns this into the next state
      return {
        byId,
        allIds,
        nextTodoId: Math.max( ...allIds ) + 1,
      };
    },
    addTodo( state, action: PayloadAction<string> ) {
      const todo: Todo = {
        id: state.nextTodoId,
        text: action.payload,
        completed: false,
      };

      // Here, Immer picks up on the changes to properties
      state.byId[ todo.id ] = todo;
      state.allIds.push( todo.id );
      state.nextTodoId += 1;
    },
    toggleTodo( state, action: PayloadAction<Todo> ) {
      let foundTodo = state.byId[ action.payload.id ];
      if ( foundTodo ) {
        foundTodo.completed = !foundTodo.completed;
      }
    },
    deleteTodo( state, action: PayloadAction<Todo> ) {
      let foundTodo = state.byId[ action.payload.id ];
      let index = state.allIds.indexOf( foundTodo.id );
      state.allIds.splice( index, 1 );
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete state.byId[ foundTodo.id ];
    },
  },
} );

export const { addTodo, deleteTodo, toggleTodo, loadTodos } =
  todosSlice.actions;
export default todosSlice.reducer;
