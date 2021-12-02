import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

export const store = createStore(
  reducer,
  composeWithDevTools( applyMiddleware( logger ) ),
);
