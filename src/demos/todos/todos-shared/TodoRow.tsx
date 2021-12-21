import React from 'react';
import { Todo } from '.';
import classNames from 'classnames';
import './todos.css';

type TodoRowProps = {
  todo: Todo;
  toggleTodo: ( todo: Todo ) => void;
};

const TodoRow = ( { todo, toggleTodo }: TodoRowProps ) => {
  const { text, completed, id } = todo;

  return (
    <div className="mb-2 d-flex align-items-baseline">
      <div className="me-2">
        <input
          type="checkbox"
          className="btn-check"
          id={`completed-${id}`}
          onChange={() => toggleTodo( todo )}
          checked={completed}
        />
        <label className="btn btn-outline-primary" htmlFor={`completed-${id}`}>
          Completed
        </label>
      </div>
      <div className={classNames( { completed, 'text-muted': completed } )}>
        {text}
      </div>
    </div>
  );
};

export default TodoRow;
