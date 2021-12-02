import React, { ReactElement } from 'react';
import { ActionCreator, AnyAction } from '@reduxjs/toolkit';

export interface CounterProps {
  value: number;
  increment: ActionCreator<AnyAction>;
  decrement: ActionCreator<AnyAction>;
}

export default function Counter( {
  value,
  increment,
  decrement,
}: CounterProps ): ReactElement {
  return (
    <div className="card">
      <div className="card-header bg-secondary">
        Redux-toolkit-enabled counter
      </div>
      <div className="card-body">
        <div className="text-center mb-4">
          <h3>{value}</h3>
        </div>
        <div className="text-center">
          <button className="btn btn-danger" onClick={decrement}>
            <span role="img" aria-label="heavy minus sign">
              ➖
            </span>
            <br />
            <span>Decrement</span>
          </button>
          &nbsp;
          <button className="btn btn-success" onClick={increment}>
            <span role="img" aria-label="heavy plus sign">
              ➕
            </span>
            <br />
            <span>Increment</span>
          </button>
        </div>
      </div>
    </div>
  );
}
