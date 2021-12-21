import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../todos-shared';

type ById = {
  [id: number]: Todo;
};

export type TodosState = {
  byId: ById;
  allIds: number[];
  nextTodoId: number;
};

const initialState: TodosState = { byId: {}, allIds: [], nextTodoId: 6 };

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async( input, thunkAPI ) => {
    let todos: Todo[] = [];
    try {
      todos = ( await fetch( 'http://localhost:9000/todos' ).then(
        async( response ) => response.json(),
      ) ) as Todo[];
      return todos;
    } catch ( err ) {
      // Unlikely
      console.error( err );
    }
    return todos;
  },
);

const todosSlice = createSlice( {
  name: 'todos',
  initialState,
  reducers: {
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
  extraReducers: ( builder ) => {
    builder.addCase( fetchTodos.fulfilled, ( state, action ) => {
      let todos = action.payload;
      let byId = todos.reduce<ById>( ( collection, todo ) => {
        collection[ todo.id ] = todo;
        return collection;
      }, {} );

      let allIds = Object.keys( byId ).map( Number );

      return {
        byId,
        allIds,
        nextTodoId: Math.max( ...allIds ) + 1,
      };
    } );
  },
} );

export const { addTodo, deleteTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
