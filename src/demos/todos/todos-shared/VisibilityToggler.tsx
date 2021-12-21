import React from 'react';
import { HideCompleted } from '.';

interface Props {
  hideCompleted: HideCompleted;
}

const VisibilityToggler = ( { hideCompleted }: Props ) => {
  return (
    <div className="row mb-2">
      <div className="col">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="visibility-toggle"
            onChange={( event ) => {
              hideCompleted( event.target.checked );
            }}
          />
          <label className="form-check-label" htmlFor="visibility-toggle">
            Hide completed todos
          </label>
        </div>
      </div>
    </div>
  );
};

export default VisibilityToggler;
