import React from 'react';
import PropTypes from 'prop-types';
import ToDoListItemContainer from '../containers/ToDoListItemContainer';
import ItemFormContainer from '../containers/ItemFormContainer';

const buildToDoListItem = (item, deleteItemFn, editItemFn) => (
  <ToDoListItemContainer
    deleteItem={deleteItemFn}
    saveEdit={editItemFn}
    id={item.id}
    key={item.id}
    text={item.text}
  />
);

const buildToDoListItems = (items, deleteItemFn, editItemFn) =>
  items.map(item => buildToDoListItem(item, deleteItemFn, editItemFn));

const ToDoList = props => (
  <div>
    <p>{`List size: ${props.items.length}`}</p>
    <ItemFormContainer addItem={props.addItem} />
    {buildToDoListItems(props.items, props.deleteItem, props.editItem)}
  </div>
);

ToDoList.propTypes = {
  addItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.object),
};

ToDoList.defaultProps = {
  items: [],
};

export default ToDoList;
