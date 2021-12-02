import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { store } from './counter-slice';
import ReduxCounter from './ReduxCounter';

export default function ReduxContainer(): ReactElement {
  return (
    <Provider store={store}>
      <ReduxCounter />
    </Provider>
  );
}
