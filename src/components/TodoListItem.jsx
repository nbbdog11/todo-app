import React from 'react';
import PropTypes from 'prop-types';
import EditTodoInputContainer from '../containers/EditTodoInputContainer';

const TodoListItem = (props) => {
  const saveTodo = (text) => {
    const todo = {
      id: props.id,
      text,
    };
    props.saveEdit(todo);
  };
  const textElement = props.isEditing ?
    (<EditTodoInputContainer
      defaultValue={props.text}
      save={saveTodo}
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

TodoListItem.propTypes = {
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  isEditing: PropTypes.bool,
  saveEdit: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

TodoListItem.defaultProps = {
  isEditing: false,
};

export default TodoListItem;
