import React from 'react';
import PropTypes from 'prop-types';
import TodoListTableRowContainer from '../containers/TodoListTableRowContainer';

const TodoListTable = (props) => {
  const { lists } = props;
  if (!lists || lists.length === 0) {
    return null;
  }

  return (
    lists.map(list => (
      <TodoListTableRowContainer
        key={list.id}
        list={list}
      />
    ))
  );
};

TodoListTable.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default TodoListTable;
