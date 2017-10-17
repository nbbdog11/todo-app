import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  INCOMPLETE_TODO,
  SAVE_EDIT,
  TOGGLE_COMPLETED,
} from '../actions/actionTypes';

const setTodoState = (state, id, completed) => {
  const todos = state.todos.map((todo) => {
    if (todo.id === id) {
      return Object.assign({}, todo, { completed });
    }
    return todo;
  });
  return Object.assign({}, state, { todos });
};

const addTodo = (state, todo) => {
  const todoForAdd = Object.assign({}, todo, {
    completed: false,
    order: state.todos.length + 1,
  });

  return Object.assign({}, state, {
    todos: [...state.todos, todoForAdd],
  });
};

const completeTodo = (state, id) => setTodoState(state, id, true);

const deleteTodo = (state, id) => {
  const todos = state.todos.filter(todo => todo.id !== id);
  return Object.assign({}, state, {
    todos,
  });
};

const incompleteTodo = (state, id) => setTodoState(state, id, false);

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

const toggleCompleted = (state, { showCompleted }) =>
  Object.assign({}, state, {
    showCompleted,
  });

const defaultState = {
  todos: [],
  showCompleted: true,
};

const todoAppReducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case ADD_TODO:
      return addTodo(state, action.todo);
    case COMPLETE_TODO:
      return completeTodo(state, action.id);
    case DELETE_TODO:
      return deleteTodo(state, action.id);
    case INCOMPLETE_TODO:
      return incompleteTodo(state, action.id);
    case SAVE_EDIT:
      return saveEdit(state, action.todo);
    case TOGGLE_COMPLETED:
      return toggleCompleted(state, action);
    default:
      break;
  }
  return state;
};

export default todoAppReducer;
