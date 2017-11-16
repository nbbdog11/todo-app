import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import sortBy from 'sort-by';
import {
  getCompletionStatsForList,
  getNameForList,
} from '../../helpers/api';
import TodoListHeaderBar from '../../components/singleListPage/TodoListHeaderBar';
import TodoList from '../../components/singleListPage/TodoList';
import ShowCompletedToggleContainer from './ShowCompletedToggleContainer';
import contentStyle from '../../styles/content';

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

  return (
    <div>
      <TodoListHeaderBar
        name={name}
      />
      <div style={contentStyle}>
        <ShowCompletedToggleContainer />
        <TodoList
          id={listId}
          todos={sortedTodos}
          {...completionStats}
        />
      </div>
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

export default connect(
  mapStateToProps,
)(TodoListContainer);
