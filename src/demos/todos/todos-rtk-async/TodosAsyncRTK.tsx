import React from 'react';
import { Provider } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../todos-rtk/todos-rtk-hooks';
import { addTodo, toggleTodo } from './todos-async-slice';
import { toggleVisibility } from '../todos-rtk/visibility-slice';
import AddTodoRow from '../todos-shared/AddTodoRow';
import VisibilityToggler from '../todos-shared/VisibilityToggler';
import TodoRow from '../todos-shared/TodoRow';
import { store } from './todos-async-store';
import { Visibility } from '../todos-shared';

const TodosAsyncRTK = () => {
  const visibility = useAppSelector( ( state ) => state.visibility.visibility );
  let todos = useAppSelector( ( state ) => Object.values( state.todos.byId ) );
  if ( visibility === Visibility.Hidden ) {
    todos = todos.filter( ( t ) => !t.completed );
  }
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="row">
        <div className="col">
          <h3>Todos (Redux Toolkit Async)</h3>
        </div>
      </div>
      <AddTodoRow saveTodo={( text ) => dispatch( addTodo( text ) )} />
      <hr />
      <VisibilityToggler
        hideCompleted={( hide ) => dispatch( toggleVisibility() )}
      />
      <div className="row">
        <div className="col">
          {todos.map( ( todo ) => (
            <TodoRow
              todo={todo}
              key={todo.id}
              toggleTodo={( todo ) => dispatch( toggleTodo( todo ) )}
            />
          ) )}
        </div>
      </div>
    </>
  );
};

const Wrapper = () => (
  <Provider store={store}>
    <TodosAsyncRTK />
  </Provider>
);

export default Wrapper;
