import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { getStore } from '../src/state/store/store';
import TodoListsListContainer from './containers/TodoListsListContainer';
import TodoListContainer from './containers/singleListPage/TodoListContainer';

import './shared.scss';

const store = getStore();

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={TodoListsListContainer} />
        <Route path="/list/:id" component={TodoListContainer} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

render(
  <App />,
  document.getElementById('app'),
);
