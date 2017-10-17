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

const getCompletionStats = (todos) => {
  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;
  const completedPercentage = totalCount === 0 ? 0 : (completedCount / totalCount) * 100;
  return {
    completedCount,
    completedPercentage,
    totalCount,
  };
};

const TodoList = (props) => {
  const {
    completedCount,
    completedPercentage,
    totalCount,
  } = getCompletionStats(props.todos);

  const completionStatsString = `Completed ${completedPercentage.toFixed(2)}%: ${completedCount}/${totalCount}`;

  return (
    <div>
      <p>{completionStatsString}</p>
      <AddTodoFormContainer />
      {buildTodoListItems(props.todos)}
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
};

TodoList.defaultProps = {
  todos: [],
};

export default TodoList;
