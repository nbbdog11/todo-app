import React from 'react';
import PropTypes from 'prop-types';
import ToDoListItemContainer from '../containers/ToDoListItemContainer';
import AddTodoFormContainer from '../containers/AddTodoFormContainer';

const buildToDoListItem = item => (
  <ToDoListItemContainer
    id={item.id}
    key={item.id}
    text={item.text}
  />
);

const buildToDoListItems = items =>
  items.map(item => buildToDoListItem(item));

const ToDoList = props => (
  <div>
    <p>{`List size: ${props.todos.length}`}</p>
    <AddTodoFormContainer />
    {buildToDoListItems(props.todos)}
  </div>
);

ToDoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
};

ToDoList.defaultProps = {
  todos: [],
};

export default ToDoList;
