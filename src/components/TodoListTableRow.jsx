import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TodoListTableRow = (props) => {
  const {
    completedPercentage,
    list,
  } = props;
  const {
    id,
    name,
  } = list;

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '4fr 1fr',
  };

  const percentageColumnStyle = {
    justifySelf: 'center',
  };

  return (
    <div style={gridStyle}>
      <Link to={`/list/${id}`}>
        {name}
      </Link>
      <div style={percentageColumnStyle}>{`${completedPercentage}%`}</div>
    </div>
  );
};

TodoListTableRow.propTypes = {
  completedPercentage: PropTypes.string.isRequired,
  list: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default TodoListTableRow;
