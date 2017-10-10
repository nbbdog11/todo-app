import {
  ADD_TODO,
  DELETE_TODO,
  SAVE_EDIT,
} from '../actions/actionTypes';

const addTodo = (state, todo) =>
  Object.assign({}, state, {
    todos: [...state.todos, todo],
  });

const completeTodo = (state, id) => {
  const todos = state.todos.map((todo) => {
    if (todo.id === id) {
      return Object.assign({}, todo, { completed: true });
    }
    return todo;
  });
  return Object.assign({}, state, { todos });
};

const deleteTodo = (state, id) => {
  const todos = state.todos.filter(todo => todo.id !== id);
  return Object.assign({}, state, {
    todos,
  });
};

const saveEdit = (state, { id, text }) => {
  const todos = state.todos.map((todo) => {
    if (todo.id !== id) {
      return todo;
    }
    return Object.assign({}, todo, {
      text,
    });
  });

  return Object.assign({}, state, {
    todos,
  });
};

const todoAppReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case ADD_TODO:
      return addTodo(state, action.todo);
    case 'COMPLETE_TODO':
      return completeTodo(state, action.id);
    case DELETE_TODO:
      return deleteTodo(state, action.id);
    case SAVE_EDIT:
      return saveEdit(state, action.todo);
    default:
      break;
  }
  return state;
};

export default todoAppReducer;
