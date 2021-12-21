import React from 'react';
import { connect } from 'react-redux';
import { Todo, Visibility } from '../todos-shared';
import TodoRow from '../todos-shared/TodoRow';
import { toggleTodo } from './todos-actions';
import { AppDispatch, AppState } from './todos-classic-store';

interface Props {
  todos: Todo[];
  toggleTodo: ( todo: Todo ) => void;
}

const TodosList = ( { todos, toggleTodo }: Props ) => {
  return (
    <div className="row">
      <div className="col">
        {todos.map( ( todo ) => (
          <TodoRow todo={todo} key={todo.id} toggleTodo={toggleTodo} />
        ) )}
      </div>
    </div>
  );
};

const mapStateToProps = ( state: AppState ) => {
  let todos = Object.values( state.todos.byId );
  if ( state.visbility.visibility === Visibility.Hidden ) {
    todos = todos.filter( ( t ) => !t.completed );
  }

  console.log( 'TodosListClassic mapStateToProps' );

  return {
    todos,
  };
};

const mapDispatchToProps = ( dispatch: AppDispatch ) => {
  console.log( 'TodosListClassic mapDispatchToProps' );
  return {
    toggleTodo: ( todo: Todo ) => dispatch( toggleTodo( todo ) ),
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( TodosList );
