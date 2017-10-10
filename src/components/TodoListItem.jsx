import React from 'react';
import PropTypes from 'prop-types';
import CompleteTodoCheckbox from '../components/CompleteTodoCheckbox';
import EditTodoInputContainer from '../containers/EditTodoInputContainer';

const TodoListItem = (props) => {
  const completeTodo = () => {
    props.completeTodo(props.id);
  };

  const deleteTodo = () => {
    props.deleteTodo(props.id);
  };

  const editTodo = () => {
    if (!props.isEditing) {
      props.editTodo(props.id);
    }
  };

  const incompleteTodo = () => {
    props.incompleteTodo(props.id);
  };

  const saveTodo = (text) => {
    const todo = {
      id: props.id,
      text,
    };
    props.saveEdit(todo);
  };

  const textStyle = props.isComplete ? { textDecoration: 'line-through' } : { };

  const textElement = props.isEditing ?
    (<EditTodoInputContainer
      defaultValue={props.text}
      save={saveTodo}
    />) :
    <span style={textStyle}>{props.text}</span>;

  return (
    <div>
      <CompleteTodoCheckbox
        completeTodo={completeTodo}
        incompleteTodo={incompleteTodo}
      />
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
  completeTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  incompleteTodo: PropTypes.func.isRequired,
  isComplete: PropTypes.bool,
  isEditing: PropTypes.bool,
  saveEdit: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

TodoListItem.defaultProps = {
  isComplete: false,
  isEditing: false,
};

export default TodoListItem;
