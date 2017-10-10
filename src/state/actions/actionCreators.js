import {
  ADD_TODO,
  DELETE_TODO,
  SAVE_EDIT,
} from './actionTypes';

const addTodo = todo => ({
  type: ADD_TODO,
  todo,
});

const completeTodo = id => ({
  type: 'COMPLETE_TODO',
  id,
});

const deleteTodo = id => ({
  type: DELETE_TODO,
  id,
});

const saveEdit = todo => ({
  type: SAVE_EDIT,
  todo,
});

export {
  addTodo,
  completeTodo,
  deleteTodo,
  saveEdit,
};
