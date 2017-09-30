import React from 'react';
import PropTypes from 'prop-types';
import ToDoListItem from './ToDoListItem';
import ItemFormContainer from '../containers/ItemFormContainer';

const buildToDoListItem = (item, deleteItemFn) => (
  <ToDoListItem
    deleteItem={deleteItemFn}
    id={item.id}
    key={item.id}
    text={item.text}
  />
);

const buildToDoListItems = (items, deleteItemFn) =>
  items.map(item => buildToDoListItem(item, deleteItemFn));

const ToDoList = props => (
  <div>
    <p>{`List size: ${props.items.length}`}</p>
    <ItemFormContainer addItem={props.addItem} />
    {buildToDoListItems(props.items, props.deleteItem)}
  </div>
);

ToDoList.propTypes = {
  addItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.object),
};

ToDoList.defaultProps = {
  items: [],
};

export default ToDoList;
