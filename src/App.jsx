import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ToDoListContainer from './containers/ToDoListContainer';
import todoListReducer from './state/reducers/reducers';
import './shared.css';

const App = () => (<ToDoListContainer />);

const store = createStore(todoListReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
