import React from 'react';
import PropTypes from 'prop-types';
import TodoListItemContainer from '../containers/TodoListItemContainer';
import AddTodoFormContainer from '../containers/AddTodoFormContainer';

const buildTodoListItem = item => (
  <TodoListItemContainer
    id={item.id}
    key={item.id}
    text={item.text}
  />
);

const buildTodoListItems = items =>
  items.map(item => buildTodoListItem(item));

const TodoList = props => (
  <div>
    <p>{`List size: ${props.todos.length}`}</p>
    <AddTodoFormContainer />
    {buildTodoListItems(props.todos)}
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
};

TodoList.defaultProps = {
  todos: [],
};

export default TodoList;
