import { connect } from 'react-redux';
import Counter from './Counter';
import { addOne, subtractOne } from './actions';
import { ReduxState } from './reducer';
import { Dispatch } from '@reduxjs/toolkit';

const mapStateToProps = ( state: ReduxState ) => ( {
  value: state.counter,
} );

const mapDispatchToProps = ( dispatch: Dispatch ) => ( {
  increment: () => dispatch( addOne() ),
  decrement: () => dispatch( subtractOne() ),
} );

const ReduxCounter = connect( mapStateToProps, mapDispatchToProps )( Counter );

export default ReduxCounter;
