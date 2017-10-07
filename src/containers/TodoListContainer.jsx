import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TodoList from '../components/TodoList';

const TodoListContainer = props => (
  <TodoList
    todos={props.todos}
  />
);

TodoListContainer.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(TodoListContainer);
