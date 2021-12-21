import { SaveTodo, Todo, ToggleTodo } from '../todos-shared';

export enum ActionsEnum {
  loadTodos = 'LOAD_TODOS',
  addTodo = 'ADD_TODO',
  toggleTodo = 'TOGGLE_TODO',
  deleteTodo = 'DELETE_TODO',
}

export const loadTodos = ( todos: Todo[] ) => {
  return {
    type: ActionsEnum.loadTodos,
    payload: todos,
  };
};

export const addTodo = ( ...args: Parameters<SaveTodo> ) => {
  return {
    type: ActionsEnum.addTodo,
    payload: args[ 0 ],
  };
};

export const toggleTodo = ( ...args: Parameters<ToggleTodo> ) => {
  return {
    type: ActionsEnum.toggleTodo,
    payload: args[ 0 ],
  };
};

export const deleteTodo = ( todo: Todo ) => {
  return {
    type: ActionsEnum.deleteTodo,
    payload: todo,
  };
};
