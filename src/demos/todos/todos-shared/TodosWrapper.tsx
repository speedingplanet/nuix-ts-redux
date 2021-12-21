import React, { useState } from 'react';
import { Todo } from '.';
import importedTodos from './todos';
import TodosContainer from './TodosContainer';

const TodosWrapper = () => {
  const [ todos, setTodos ] = useState<Todo[]>( importedTodos );
  const [ hideTodos, setHideTodos ] = useState( false );

  const handleToggleTodo = ( todo: Todo ) => {
    let localTodos = [ ...todos ];
    let toggledTodo = localTodos.find( ( t ) => t.id === todo.id );
    if ( toggledTodo ) {
      toggledTodo.completed = !toggledTodo.completed;
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

    todos.push( todo );
    setTodos( todos );
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
