import { createStore } from 'redux';
import getInitialState from './initial-state.js';

const store = createStore((state, action) => (
  typeof action.type === 'function' ? action.type(state) : state
), getInitialState());

export default store;
