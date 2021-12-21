import React, { useState } from 'react';
import { SaveTodo } from '.';

interface Props {
  saveTodo: SaveTodo;
}

const AddTodoRow = ( { saveTodo }: Props ) => {
  const [ todoText, setTodoText ] = useState( '' );

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ( event ) => {
    setTodoText( event.target.value );
  };

  return (
    <div className="mb-2 d-flex align-items-baseline">
      <div className="me-2">
        <label htmlFor="add-todo" className="form-label">
          Add todo:
        </label>
      </div>
      <div className="flex-grow-1">
        <input
          type="email"
          className="form-control"
          id="add-todo"
          value={todoText}
          onChange={handleChange}
          onKeyDown={( event ) => {
            if ( event.key === 'Enter' ) {
              saveTodo( todoText );
              setTodoText( '' );
            }
          }}
        />
      </div>
    </div>
  );
};

export default AddTodoRow;
