import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import sortBy from 'sort-by';
import {
  getCompletionStatsForList,
  getNameForList,
} from '../../helpers/api';
import TodoList from '../../components/singleListPage/TodoList';

const filterCompletedTodos = todos =>
  todos.filter(todo => !todo.completed);

const sortIncompleteTodosFirst = todos =>
  todos.sort(sortBy('completed', 'order'));

const TodoListContainer = ({ match, showCompleted, todos }) => {
  const listId = match.params.id;
  const name = getNameForList(listId);
  const completionStats = getCompletionStatsForList(listId);
  const filteredTodos = showCompleted ? todos : filterCompletedTodos(todos);
  const sortedTodos = sortIncompleteTodosFirst(filteredTodos);

  const {
    completedCount,
    completedPercentage,
    totalCount,
  } = completionStats;

  return (
    <TodoList
      completedCount={completedCount}
      completedPercentage={completedPercentage}
      id={listId}
      name={name}
      todos={sortedTodos}
      totalCount={totalCount}
    />
  );
};

TodoListContainer.propTypes = {
  match: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  showCompleted: PropTypes.bool,
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

TodoListContainer.defaultProps = {
  showCompleted: true,
};

const mapStateToProps = ({ showCompleted, todos }, ownProps) => ({
  showCompleted,
  todos: todos.filter(todo => todo.listId === ownProps.match.params.id),
});

export default connect(
  mapStateToProps,
)(TodoListContainer);
