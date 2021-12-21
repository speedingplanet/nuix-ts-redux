import React, { useState } from 'react';
import { Todo } from '.';
import importedTodos from './todos';
import TodosContainer from './TodosContainer';

const TodosWrapper = () => {
  const [ todos, setTodos ] = useState<Todo[]>( importedTodos );
  const [ hideTodos, setHideTodos ] = useState( false );

  const handleToggleTodo = ( todo: Todo ) => {
    let localTodos = [ ...todos ];
    let todoPosition = localTodos.findIndex( ( t ) => t.id === todo.id );
    if ( todoPosition > -1 ) {
      let toggleTodo = { ...localTodos[ todoPosition ] };
      toggleTodo.completed = !toggleTodo.completed;
      localTodos[ todoPosition ] = toggleTodo;

      setTodos( localTodos );
    }
  };

  const handleSaveTodo = ( todoText: string ) => {
    let nextId = Math.max( ...todos.map( ( t ) => t.id ) ) + 1;
    let todo: Todo = {
      id: nextId,
      text: todoText,
      completed: false,
    };

    let localTodos = [ ...todos ];
    localTodos.push( todo );
    setTodos( localTodos );
  };

  const handleHideCompleted = ( hide: boolean ) => {
    setHideTodos( hide );
  };

  let displayTodos = hideTodos ? todos.filter( ( t ) => !t.completed ) : todos;

  return (
    <TodosContainer
      todos={displayTodos}
      toggleTodo={handleToggleTodo}
      saveTodo={handleSaveTodo}
      hideCompleted={handleHideCompleted}
    />
  );
};

export default TodosWrapper;
