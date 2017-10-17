import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import sortBy from 'sort-by';
import TodoList from '../components/TodoList';
import ShowCompletedToggleContainer from '../containers/ShowCompletedToggleContainer';

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

const filterCompletedTodos = todos =>
  todos.filter(todo => !todo.completed);

const sortIncompleteTodosFirst = todos =>
  todos.sort(sortBy('completed', 'order'));

const TodoListContainer = ({ showCompleted, todos }) => {
  const completionStats = getCompletionStats(todos);
  const filteredTodos = showCompleted ? todos : filterCompletedTodos(todos);
  const sortedTodos = sortIncompleteTodosFirst(filteredTodos);

  return (
    <div>
      <ShowCompletedToggleContainer />
      <TodoList
        todos={sortedTodos}
        {...completionStats}
      />
    </div>
  );
};

TodoListContainer.propTypes = {
  showCompleted: PropTypes.bool,
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

TodoListContainer.defaultProps = {
  showCompleted: true,
};

const mapStateToProps = ({ showCompleted, todos }) => ({
  showCompleted,
  todos,
});

export default connect(mapStateToProps)(TodoListContainer);
