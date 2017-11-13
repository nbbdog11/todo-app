import React from 'react';
import PropTypes from 'prop-types';
import CompleteTodoCheckbox from '../components/CompleteTodoCheckbox';
import EditTodoInputContainer from '../containers/EditTodoInputContainer';
import rowContainerStyle from '../styles/containers';

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

  const buttonStyle = {
    margin: '0 3 0 3',
    verticalAlign: 'middle',
  };

  const textStyle = {
    display: 'inline-block',
    textDecoration: props.isComplete ? 'line-through' : '',
    width: '80%',
  };

  const textElement = props.isEditing ?
    (<EditTodoInputContainer
      defaultValue={props.text}
      save={saveTodo}
    />) :
    <span style={textStyle}>{props.text}</span>;

  return (
    <div style={rowContainerStyle}>
      <CompleteTodoCheckbox
        completeTodo={completeTodo}
        incompleteTodo={incompleteTodo}
        isCompleted={props.isComplete}
      />
      {textElement}
      <button
        aria-label="Edit Button"
        disabled={props.isEditing}
        onClick={editTodo}
        style={buttonStyle}
      ><i className="fa fa-pencil-square-o" aria-hidden="true" /></button>
      <button
        aria-label="Delete Button"
        onClick={deleteTodo}
        style={buttonStyle}
      ><i className="fa fa-trash-o" aria-hidden="true" /></button>
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
