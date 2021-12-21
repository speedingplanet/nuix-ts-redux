import { AnyAction, Reducer } from '@reduxjs/toolkit';
import { Todo } from '../todos-shared';
import { ActionsEnum } from './todos-actions';

type ById = {
  [id: number]: Todo;
};

export type TodosState = {
  byId: ById;
  allIds: number[];
  nextTodoId: number;
};

const reducer: Reducer<TodosState, AnyAction> = (
  state = { byId: {}, allIds: [], nextTodoId: 6 },
  action,
) => {
  switch ( action.type ) {
  case ActionsEnum.loadTodos: {
    let todos = action.payload as Todo[];
    let byId = todos.reduce<ById>( ( collection, todo ) => {
      collection[ todo.id ] = todo;
      return collection;
    }, {} );

    let allIds = Object.keys( byId ).map( Number );
    return {
      ...state,
      allIds,
      byId,
      nextTodoId: Math.max( ...allIds ) + 1,
    };
  }
  case ActionsEnum.addTodo: {
    const todo: Todo = {
      id: state.nextTodoId,
      text: action.payload,
      completed: false,
    };
    return {
      ...state,
      byId: { ...state.byId, [ state.nextTodoId ]: todo },
      allIds: [ ...state.allIds, state.nextTodoId ],
      nextTodoId: state.nextTodoId + 1,
    };
  }
  case ActionsEnum.toggleTodo: {
    let foundTodo = state.byId[ action.payload.id ];
    if ( foundTodo ) {
      foundTodo = { ...foundTodo };
      foundTodo.completed = !foundTodo.completed;
      return {
        ...state,
        byId: {
          ...state.byId,
          [ action.payload.id ]: foundTodo,
        },
      };
    }
    return state;
  }
  case ActionsEnum.deleteTodo: {
    let foundTodo = state.byId[ action.payload.id ];
    if ( !foundTodo ) {
      return state;
    } else {
      const nextState = { ...state };
      let index = nextState.allIds.indexOf( foundTodo.id );
      nextState.allIds.splice( index, 1 );
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete nextState.byId[ foundTodo.id ];
      return nextState;
    }
  }
  default:
    return state;
  }
};

export default reducer;
