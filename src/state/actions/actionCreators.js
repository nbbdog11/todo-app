import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  SAVE_EDIT,
} from './actionTypes';

const addTodo = todo => ({
  type: ADD_TODO,
  todo,
});

const deleteTodo = id => ({
  type: DELETE_TODO,
  id,
});

const editTodo = (id, text) => ({
  type: EDIT_TODO,
  id,
  text,
});

const saveEdit = (id, text) => ({
  type: SAVE_EDIT,
  id,
  text,
});

export {
  addTodo,
  deleteTodo,
  editTodo,
  saveEdit,
};