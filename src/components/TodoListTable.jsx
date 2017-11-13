import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getCompletionStatsForList } from '../helpers/api';
import rowContainerStyle from '../styles/containers';

const buildTableRow = (list) => {
  const {
    id,
    name,
  } = list;
  const { completedPercentage } = getCompletionStatsForList(id);
  const linkSpanStyle = {
    display: 'inline-block',
    width: '90%',
  };
  return (
    <div key={id} style={rowContainerStyle}>
      <span style={linkSpanStyle}>
        <Link to={`/list/${id}`}>
          {name}
        </Link>
      </span>
      <span>{`${completedPercentage}%`}</span>
    </div>
  );
};

const buildTableRows = lists => lists.map(buildTableRow);

const TodoListTable = ({ lists }) => {
  if (!lists || lists.length === 0) {
    return null;
  }
  return (
    buildTableRows(lists)
  );
};

TodoListTable.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoListTable;
