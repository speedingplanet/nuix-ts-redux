import React from 'react';
import { HideCompleted, SaveTodo, Todo, ToggleTodo } from '.';
import AddTodoRow from './AddTodoRow';
import TodoRow from './TodoRow';
import VisibilityToggler from './VisibilityToggler';

export interface TodosContainerProps {
  todos: Todo[];
  hideCompleted: HideCompleted;
  toggleTodo: ToggleTodo;
  saveTodo: SaveTodo;
}

const TodosContainer = ( {
  todos,
  hideCompleted,
  toggleTodo,
  saveTodo,
}: TodosContainerProps ) => {
  return (
    <>
      <div className="row">
        <div className="col">
          <h3>Todos (no Redux)</h3>
        </div>
      </div>
      <AddTodoRow saveTodo={saveTodo} />
      <hr />
      <VisibilityToggler hideCompleted={hideCompleted} />
      <div className="row">
        <div className="col">
          {todos.map( ( todo ) => (
            <TodoRow todo={todo} key={todo.id} toggleTodo={toggleTodo} />
          ) )}
        </div>
      </div>
    </>
  );
};

export default TodosContainer;
