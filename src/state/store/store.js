/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';
import todoListReducer from '../reducers/reducers';

const defaultState = {
  lists: new Map(),
  todos: [],
  showCompleted: true,
};

let store = null;
const deleteStore = () => {
  store = null;
};

const getStore = (initialState = defaultState) => {
  if (store == null) {
    store = createStore(
      todoListReducer,
      initialState,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );
  }
  return store;
};

export {
  defaultState,
  deleteStore,
  getStore,
};
