import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getCompletionStatsForList } from '../helpers/api';

const buildTableRow = (list) => {
  const {
    id,
    name,
  } = list;
  const { completedPercentage } = getCompletionStatsForList(id);

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '4fr 1fr',
  };

  const percentageColumnStyle = {
    justifySelf: 'center',
  };

  return (
    <div key={id} style={gridStyle}>
      <div>
        <Link to={`/list/${id}`}>
          {name}
        </Link>
      </div>
      <div style={percentageColumnStyle}>{`${completedPercentage}%`}</div>
    </div>
  );
};

const buildTableRows = lists => lists.map(buildTableRow);

const TodoListTable = (props) => {
  const { lists } = props;
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
