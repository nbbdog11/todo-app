/* eslint-disable no-underscore-dangle */
import { createStore as reduxCreateStore } from 'redux';
import todoListReducer from '../reducers/reducers';

const createStore = () =>
  reduxCreateStore(
    todoListReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default createStore;
