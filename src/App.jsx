import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createStore from '../src/state/store/storeCreator';
import TodoListContainer from './containers/TodoListContainer';

import './shared.scss';

const App = () => (<TodoListContainer />);

const store = createStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
