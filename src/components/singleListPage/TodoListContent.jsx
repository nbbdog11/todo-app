import React from 'react';
import PropTypes from 'prop-types';
import TodoListItemContainer from '../../containers/singleListPage/TodoListItemContainer';
import AddTodoFormContainer from '../../containers/singleListPage/AddTodoFormContainer';
import ShowCompletedToggleContainer from '../../containers/singleListPage/ShowCompletedToggleContainer';
import contentStyle from '../../styles/content';

const buildTodoListItem = (item) => {
  const {
    id,
    text,
  } = item;

  return (
    <TodoListItemContainer
      id={id}
      key={id}
      text={text}
    />
  );
};

const buildTodoListItems = items =>
  items.map(item => buildTodoListItem(item));

const TodoListContent = (props) => {
  const {
    completedCount,
    completedPercentage,
    id,
    todos,
    totalCount,
  } = props;
  const completionStatsString = `Completed ${completedPercentage}%: ${completedCount}/${totalCount}`;

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  };
  const completionDivStyle = {
    justifySelf: 'end',
  };

  return (
    <div style={contentStyle}>
      <div style={gridStyle}>
        <AddTodoFormContainer
          listId={id}
        />
        <div style={completionDivStyle}>
          <ShowCompletedToggleContainer />
          <div>{completionStatsString}</div>
        </div>
      </div>
      {buildTodoListItems(todos)}
    </div>
  );
};

TodoListContent.propTypes = {
  completedCount: PropTypes.number.isRequired,
  completedPercentage: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  todos: PropTypes.arrayOf(PropTypes.object),
  totalCount: PropTypes.number.isRequired,
};

TodoListContent.defaultProps = {
  todos: [],
};

export default TodoListContent;
