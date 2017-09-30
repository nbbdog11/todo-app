import React from 'react';
import { render } from 'react-dom';
import ToDoListContainer from './containers/ToDoListContainer';

const App = () => (<ToDoListContainer />);

render(
  <App />,
  document.getElementById('app'),
);
