import React from 'react';
import {
  createStore,
  applyMiddleware,
  Reducer,
  AnyAction,
  Dispatch,
  bindActionCreators,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connect, Provider } from 'react-redux';

type ReduxState = { counter: number; isReady: boolean };
const initialState = { counter: 1, isReady: true };

// Action types
const actions = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  ADD_AMOUNT: 'ADD_AMOUNT',
};

/*
const addAmountAction = {
  type: 'ADD_AMOUNT'
  payload: 5
}

const addUserAction = {
  type: 'ADD_USER'
  payload: {
    firstName: 'John',
    lastName: 'Paxton',
    id: ...
  }
}
*/

// Action creators
const addOne = () => ( { type: actions.INCREMENT } );
const subtractOne = () => ( { type: actions.DECREMENT } );
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const addAmount = ( amount: number ) => {
  return {
    type: 'ADD_AMOUNT',
    payload: amount,
  };
};

const reducer: Reducer<ReduxState, AnyAction> = (
  state = initialState,
  action,
) => {
  switch ( action.type ) {
  case actions.INCREMENT:
    // Don't do this (mutating state is BAD)
    // state.counter += 1;
    // return state;

    // return { ...state, counter: state.counter + 1 };
    return Object.assign( {}, state, { counter: state.counter + 1 } );
  case actions.DECREMENT:
    return { ...state, counter: state.counter - 1 };
  case actions.ADD_AMOUNT:
    return { ...state, counter: state.counter + Number( action.payload ) };
  default:
    return state;
  }
};

let composeEnhancers = composeWithDevTools( {
  name: 'Counter All-In-One File Redux',
} );

const store = createStore( reducer, composeEnhancers( applyMiddleware( logger ) ) );
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const boundActionCreators = bindActionCreators(
  { increment: addOne, decrement: subtractOne },
  store.dispatch,
);

// Above this, redux code
// Below this, react code (except at the end)

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

// Redux code to wire the React code into the store
// mapReduxStateToReactProps
// or... inputs
const mapStateToProps = ( state: ReduxState ) => ( {
  value: state.counter,
} );

// mapReduxDispatchesToReactEvents
// or... outputs
const mapDispatchToProps = ( dispatch: Dispatch ) => ( {
  // dispatch({type: 'INCREMENT'})
  increment: () => dispatch( addOne() ),
  decrement: () => dispatch( subtractOne() ),
} );

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const boundMapDispatchToProps = ( dispatch: Dispatch ) => {
  return {
    ...bindActionCreators(
      { increment: addOne, decrement: subtractOne },
      dispatch,
    ),
  };
};

const increment = addOne;
const decrement = subtractOne;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const shortMapDispatchToProps = () => ( {
  increment,
  decrement,
} );

const ConnectedCounter = connect( mapStateToProps, mapDispatchToProps )( Counter );

export default function ReduxContainer() {
  return (
    <Provider store={store}>
      <ConnectedCounter />
    </Provider>
  );
}
