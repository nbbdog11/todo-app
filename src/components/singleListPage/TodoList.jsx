import React from 'react';
import PropTypes from 'prop-types';
import TodoListItemContainer from '../../containers/singleListPage/TodoListItemContainer';
import AddTodoFormContainer from '../../containers/singleListPage/AddTodoFormContainer';

const buildTodoListItem = item => (
  <TodoListItemContainer
    id={item.id}
    key={item.id}
    text={item.text}
  />
);

const buildTodoListItems = items =>
  items.map(item => buildTodoListItem(item));

const TodoList = (props) => {
  const {
    completedCount,
    completedPercentage,
    totalCount,
  } = props;

  const completionStatsString = `Completed ${completedPercentage}%: ${completedCount}/${totalCount}`;

  return (
    <div>
      <p>{completionStatsString}</p>
      <AddTodoFormContainer listId={props.id} />
      {buildTodoListItems(props.todos)}
    </div>
  );
};

TodoList.propTypes = {
  completedCount: PropTypes.number.isRequired,
  completedPercentage: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  todos: PropTypes.arrayOf(PropTypes.object),
  totalCount: PropTypes.number.isRequired,
};

TodoList.defaultProps = {
  todos: [],
};

export default TodoList;
