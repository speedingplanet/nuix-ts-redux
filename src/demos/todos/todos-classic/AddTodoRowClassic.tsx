import { connect } from 'react-redux';
import AddTodoRow from '../todos-shared/AddTodoRow';
import { addTodo } from './todos-actions';
import { AppDispatch } from './todos-classic-store';

const mapDispatchToProps = ( dispatch: AppDispatch ) => {
  return {
    saveTodo: ( todoText: string ) => {
      dispatch( addTodo( todoText ) );
    },
  };
};

export default connect( null, mapDispatchToProps )( AddTodoRow );
