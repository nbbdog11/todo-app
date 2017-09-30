import React from 'react';
import { render } from 'react-dom';
import ToDoList from './components/ToDoList';

const App = () => (<ToDoList />);

render(
  <App />,
  document.getElementById('app'),
);
