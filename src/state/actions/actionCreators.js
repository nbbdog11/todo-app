import {
  ADD_LIST,
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  INCOMPLETE_TODO,
  SAVE_EDIT,
  TOGGLE_COMPLETED,
} from './actionTypes';

const addList = list => ({
  type: ADD_LIST,
  list,
});

const addTodo = todo => ({
  type: ADD_TODO,
  todo,
});

const completeTodo = id => ({
  type: COMPLETE_TODO,
  id,
});

const deleteTodo = id => ({
  type: DELETE_TODO,
  id,
});

const incompleteTodo = id => ({
  type: INCOMPLETE_TODO,
  id,
});

const saveEdit = todo => ({
  type: SAVE_EDIT,
  todo,
});

const toggleCompleted = showCompleted => ({
  type: TOGGLE_COMPLETED,
  showCompleted,
});

export {
  addList,
  addTodo,
  completeTodo,
  deleteTodo,
  incompleteTodo,
  saveEdit,
  toggleCompleted,
};
