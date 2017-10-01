import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ToDoList from '../components/ToDoList';

const ToDoListContainer = props => (
  <ToDoList
    todos={props.todos}
  />
);

ToDoListContainer.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(ToDoListContainer);
