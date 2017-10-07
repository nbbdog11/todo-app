import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import TodoListContainer from './containers/TodoListContainer';
import todoListReducer from './state/reducers/reducers';
import './shared.css';

const App = () => (<TodoListContainer />);

const store = createStore(todoListReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
