import React from 'react';
import PropTypes from 'prop-types';
import EditTodoInputContainer from '../containers/EditTodoInputContainer';

const ToDoListItem = (props) => {
  const textElement = props.isEditing ?
    (<EditTodoInputContainer
      defaultValue={props.text}
      save={text => props.saveEdit(props.id, text)}
    />) :
    <span>{props.text}</span>;
  return (
    <div>
      {textElement}
      <button onClick={() => props.editTodo(props.id)}>Edit</button>
      <button onClick={() => props.deleteTodo(props.id)}>Delete</button>
    </div>
  );
};

ToDoListItem.propTypes = {
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  isEditing: PropTypes.bool,
  saveEdit: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

ToDoListItem.defaultProps = {
  isEditing: false,
};

export default ToDoListItem;
