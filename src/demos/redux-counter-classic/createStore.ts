import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

let composeEnhancers = composeWithDevTools( { name: 'Counter Classic Redux' } );

export const store = createStore(
  reducer,
  composeEnhancers( applyMiddleware( logger ) ),
);
