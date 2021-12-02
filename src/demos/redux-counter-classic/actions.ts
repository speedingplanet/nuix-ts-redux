// Action types
export const actions = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
};

// Action creators
export const addOne = () => ( {
  type: actions.INCREMENT,
} );
export const subtractOne = () => ( { type: actions.DECREMENT } );
