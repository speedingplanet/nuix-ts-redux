import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodosContainer from './TodosContainer';
import todos from './todos';

test( 'Loads and displays todos', () => {
  render(
    <TodosContainer
      todos={todos}
      hideCompleted={jest.fn}
      saveTodo={jest.fn}
      toggleTodo={jest.fn}
    />,
  );

  let testTodo = todos[ 0 ];
  let todoText = screen.getByText( testTodo.text );
  let button = screen.getAllByLabelText( 'Completed' )[ 0 ];

  expect( button ).not.toBeChecked();
  expect( todoText ).toHaveTextContent( testTodo.text );
} );

test( 'Uncompleted todos are not styled', () => {
  render(
    <TodosContainer
      todos={todos}
      hideCompleted={jest.fn}
      saveTodo={jest.fn}
      toggleTodo={jest.fn}
    />,
  );

  let buttons = screen.getAllByLabelText( 'Completed' );
  todos.forEach( ( todo, index ) => {
    // Skip if completed
    if ( todo.completed ) return;

    expect( buttons[ index ] ).not.toBeChecked();
    expect( screen.getByText( todo.text ) ).not.toHaveClass(
      'completed',
      'text-muted',
    );
  } );
} );

test( 'Completed todos are styled', () => {
  render(
    <TodosContainer
      todos={todos}
      hideCompleted={jest.fn}
      saveTodo={jest.fn}
      toggleTodo={jest.fn}
    />,
  );

  let buttons = screen.getAllByLabelText( 'Completed' );
  todos.forEach( ( todo, index ) => {
    // Skip if not completed
    if ( !todo.completed ) return;

    expect( buttons[ index ] ).toBeChecked();
    expect( screen.getByText( todo.text ) ).toHaveClass( 'completed', 'text-muted' );
  } );
} );
