import React from 'react';
import { Provider } from 'react-redux';
import { store } from './todos-classic-store';
import AddTodoRow from './AddTodoRowClassic';
import VisibilityToggler from './VisibilityTogglerClassic';
import TodosList from './TodosListClassic';

const TodosClassic = () => {
  return (
    <Provider store={store}>
      <div className="row">
        <div className="col">
          <h3>Todos (Classic Redux)</h3>
        </div>
      </div>
      <AddTodoRow />
      <hr />
      <VisibilityToggler />
      <TodosList />
    </Provider>
  );
};

export default TodosClassic;
