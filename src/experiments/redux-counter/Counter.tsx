import React from 'react';

interface Props {
  counter: number;
  clickIncrement: () => void;
  clickDecrement: () => void;
}

function Counter( { counter, clickIncrement, clickDecrement }: Props ) {
  return (
    <div className="row">
      <div className="col">
        <div className="panel">
          <p>Counter value: {counter} </p>
          <button className="btn btn-danger" onClick={() => clickIncrement()}>
            Increment value
          </button>
          <button
            className="btn btn-info"
            onClick={() => {
              clickDecrement();
            }}
          >
            Decrement value
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
