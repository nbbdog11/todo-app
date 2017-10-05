import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  SAVE_EDIT,
} from '../actions/actionTypes';

const addTodo = (state, todo) =>
  Object.assign({}, state, {
    todos: [...state.todos, todo],
  });

const deleteTodo = (state, id) => {
  const todos = state.todos.filter(todo => todo.id !== id);
  return Object.assign({}, state, {
    todos,
  });
};

const editTodo = (state, id, text) => {
  const alreadyEditing = state.activeEdits.some(edit => edit.id === id);
  if (alreadyEditing) {
    const activeEdits = state.activeEdits.map((edit) => {
      if (edit.id === id) {
        return Object.assign({}, edit, {
          text,
        });
      }
      return edit;
    });
    return Object.assign({}, state, {
      activeEdits,
    });
  }
  const activeEdits = [...state.activeEdits, { id, text }];
  return Object.assign({}, state, {
    activeEdits,
  });
};

const saveEdit = (state, id, text) => {
  const todos = state.todos.map((todo) => {
    if (todo.id !== id) {
      return todo;
    }
    return Object.assign({}, todo, {
      text,
    });
  });
  const activeEdits = state.activeEdits.filter(edit => edit.id !== id);
  return Object.assign({}, state, {
    todos,
    activeEdits,
  });
};

const todoAppReducer = (state = { todos: [], activeEdits: [] }, action) => {
  switch (action.type) {
    case ADD_TODO:
      return addTodo(state, action.todo);
    case DELETE_TODO:
      return deleteTodo(state, action.id);
    case EDIT_TODO:
      return editTodo(state, action.id, action.text);
    case SAVE_EDIT:
      return saveEdit(state, action.id, action.text);
    default:
      break;
  }
  return state;
};

export default todoAppReducer;
