import React from 'react';
import PropTypes from 'prop-types';

const ToDoListItem = props => (
  <div>
    {props.text}
    <button onClick={() => props.deleteItem(props.id)}>Delete</button>
  </div>
);
ToDoListItem.propTypes = {
  deleteItem: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ToDoListItem;
