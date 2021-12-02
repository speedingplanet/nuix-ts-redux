import React from 'react';

type CounterProps = {
  value: number;
  increment: () => void;
  decrement: () => void;
};

export default function Counter( { value, increment, decrement }: CounterProps ) {
  return (
    <div className="card">
      <div className="card-header bg-secondary">
        Classic Redux-enabled counter
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
