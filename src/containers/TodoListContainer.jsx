import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import sortBy from 'sort-by';
import TodoList from '../components/TodoList';

const sortIncompleteTodosFirst = todos =>
  todos.sort(sortBy('completed', 'order'));

const TodoListContainer = (props) => {
  const sortedTodos = sortIncompleteTodosFirst(props.todos);

  return (
    <TodoList
      todos={sortedTodos}
    />
  );
};

TodoListContainer.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(TodoListContainer);
