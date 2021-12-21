import { createStore } from '@reduxjs/toolkit';
import counterReducer from './counter-reducer';

const store = createStore( counterReducer );

export { store };
