import React from 'react';
import PropTypes from 'prop-types';
import EditTodoInputContainer from '../containers/EditTodoInputContainer';

const TodoListItem = (props) => {
  const deleteTodo = () => {
    props.deleteTodo(props.id);
  };

  const editTodo = () => {
    if (!props.isEditing) {
      props.editTodo(props.id);
    }
  };

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
      <button
        disabled={props.isEditing}
        onClick={editTodo}
      >Edit</button>
      <button
        onClick={deleteTodo}
      >Delete</button>
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
