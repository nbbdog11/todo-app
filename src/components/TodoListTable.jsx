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
  return (
    <tr key={id}>
      <td>
        <Link to={`/list/${id}`}>
          {name}
        </Link>
      </td>
      <td>
        <p>{`${completedPercentage}%`}</p>
      </td>
    </tr>
  );
};

const buildTableRows = lists => lists.map(buildTableRow);

const TodoListTable = ({ lists }) => {
  if (!lists || lists.length === 0) {
    return null;
  }
  return (
    <table>
      <tbody>
        {buildTableRows(lists)}
      </tbody>
    </table>
  );
};

TodoListTable.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoListTable;
