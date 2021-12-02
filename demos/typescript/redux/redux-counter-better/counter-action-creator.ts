import actions from './counter-actions';

let incrementAction = { type: actions.INCREMENT };
let decrementAction = { type: actions.DECREMENT };

const add = (amount: number) => ({
  type: actions.ADD,
  payload: {
    amount,
  },
});

export { incrementAction, decrementAction, add };
