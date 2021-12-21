import { connect, Provider } from 'react-redux';
import Counter from './Counter';
import { store } from './redux/create-store';

// mapStateToProps
// mapReduxStateToReactProps

import { Dispatch } from '@reduxjs/toolkit';
import {
  decrementAction,
  incrementAction,
} from './redux/counter-action-creator';
import { ReduxState } from './redux/counter-reducer';

// Map component input(s) to Store output(s)
const mapStateToProps = ( state: ReduxState ) => {
  return {
    counter: state.counter,
  };
};

// mapDispatchToProps
// mapReduxStoreDispatcherToEventHandlingProps

const mapDispatchToProps = ( dispatch: Dispatch ) => {
  return {
    clickIncrement: () => dispatch( incrementAction ),
    clickDecrement: () => dispatch( decrementAction ),
  };
};

const ConnectedCounter = connect( mapStateToProps, mapDispatchToProps )( Counter );

const ReduxCounter = () => {
  return (
    <Provider store={store}>
      <ConnectedCounter />
    </Provider>
  );
};

export default ReduxCounter;
