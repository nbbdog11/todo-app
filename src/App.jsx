import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import createStore from '../src/state/store/storeCreator';
import TodoListsListContainer from './containers/TodoListsListContainer';
import TodoListContainer from './containers/TodoListContainer';

import './shared.scss';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={TodoListsListContainer} />
      <Route path="/list/:id" component={TodoListContainer} />
    </Switch>
  </BrowserRouter>
);

const store = createStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);

export default store;
