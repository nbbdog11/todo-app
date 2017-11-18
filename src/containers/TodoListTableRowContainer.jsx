import React from 'react';
import PropTypes from 'prop-types';
import TodoListTableRow from '../components/TodoListTableRow';
import { getCompletionStatsForList } from '../helpers/api';

const TodoListTableRowContainer = (props) => {
  const { list } = props;
  const { id } = list;
  const { completedPercentage } = getCompletionStatsForList(id);

  return (
    <TodoListTableRow
      completedPercentage={completedPercentage}
      list={list}
    />
  );
};

TodoListTableRowContainer.propTypes = {
  list: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default TodoListTableRowContainer;
