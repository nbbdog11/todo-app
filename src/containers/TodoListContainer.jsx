import React from 'react';
import {
  Link,
  withRouter,
} from 'react-router-dom';
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

const TodoListContainer = ({ match, showCompleted, todos }) => {
  const completionStats = getCompletionStats(todos);
  const filteredTodos = showCompleted ? todos : filterCompletedTodos(todos);
  const sortedTodos = sortIncompleteTodosFirst(filteredTodos);

  return (
    <div>
      <div>
        <Link to="/">
          <i className="fa fa-arrow-left" aria-hidden="true" />Go Back
        </Link>
      </div>
      <ShowCompletedToggleContainer />
      <TodoList
        id={match.params.id}
        todos={sortedTodos}
        {...completionStats}
      />
    </div>
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

export default withRouter(
  connect(
    mapStateToProps,
  )(TodoListContainer),
);
