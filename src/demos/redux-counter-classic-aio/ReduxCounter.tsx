import React from 'react';
import {
  createStore,
  applyMiddleware,
  Reducer,
  AnyAction,
  Dispatch,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connect, Provider } from 'react-redux';

type ReduxState = { counter: number };
const initialState = { counter: 1 };

// Action types
const actions = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
};

// Action creators
const addOne = () => ( { type: actions.INCREMENT } );
const subtractOne = () => ( { type: actions.DECREMENT } );

const reducer: Reducer<ReduxState, AnyAction> = (
  state = initialState,
  action,
) => {
  switch ( action.type ) {
  case actions.INCREMENT:
    return { counter: state.counter + 1 };
  case actions.DECREMENT:
    return { counter: state.counter - 1 };
  default:
    return state;
  }
};

let composeEnhancers = composeWithDevTools( {
  name: 'Counter All-In-One File Redux',
} );

const store = createStore( reducer, composeEnhancers( applyMiddleware( logger ) ) );

type CounterProps = {
  value: number;
  increment: () => void;
  decrement: () => void;
};

function Counter( { value, increment, decrement }: CounterProps ) {
  return (
    <div className="card">
      <div className="card-header bg-secondary">
        Classic Redux-enabled counter (all in one file)
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

const mapStateToProps = ( state: ReduxState ) => ( {
  value: state.counter,
} );

const mapDispatchToProps = ( dispatch: Dispatch ) => ( {
  increment: () => dispatch( addOne() ),
  decrement: () => dispatch( subtractOne() ),
} );

const ConnectedCounter = connect( mapStateToProps, mapDispatchToProps )( Counter );

export default function ReduxContainer() {
  return (
    <Provider store={store}>
      <ConnectedCounter />
    </Provider>
  );
}
