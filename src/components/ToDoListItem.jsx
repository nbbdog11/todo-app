import React from 'react';
import PropTypes from 'prop-types';
import EditItemInputContainer from '../containers/EditItemInputContainer';

const ToDoListItem = (props) => {
  const textElement = props.isEditing ?
    (<EditItemInputContainer
      defaultValue={props.text}
      save={text => props.saveEdit(props.id, text)}
    />) :
    <span>{props.text}</span>;
  return (
    <div>
      {textElement}
      <button onClick={() => props.editItem(props.id)}>Edit</button>
      <button onClick={() => props.deleteItem(props.id)}>Delete</button>
    </div>
  );
};

ToDoListItem.propTypes = {
  deleteItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  isEditing: PropTypes.bool,
  saveEdit: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

ToDoListItem.defaultProps = {
  isEditing: false,
};

export default ToDoListItem;
