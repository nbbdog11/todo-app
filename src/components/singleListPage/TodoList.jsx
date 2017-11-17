import React from 'react';
import PropTypes from 'prop-types';
import TodoListHeaderBar from './TodoListHeaderBar';
import TodoListContent from './TodoListContent';

const TodoList = (props) => {
  const {
    completedCount,
    completedPercentage,
    id,
    name,
    todos,
    totalCount,
  } = props;

  return (
    <div>
      <TodoListHeaderBar
        name={name}
      />
      <TodoListContent
        completedCount={completedCount}
        completedPercentage={completedPercentage}
        id={id}
        todos={todos}
        totalCount={totalCount}
      />
    </div>
  );
};

TodoList.propTypes = {
  completedCount: PropTypes.number.isRequired,
  completedPercentage: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  totalCount: PropTypes.number.isRequired,
};

export default TodoList;
