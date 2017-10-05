import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  SAVE_EDIT,
} from '../../../src/state/actions/actionTypes';

import {
  addTodo,
  deleteTodo,
  editTodo,
  saveEdit,
} from '../../../src/state/actions/actionCreators';

describe('addTodo', () => {
  test('uses ADD_TODO type', () => {
    const result = addTodo();

    expect(result.type).toBe(ADD_TODO);
  });

  test('returns todo object passed in', () => {
    const todo = {
      id: '123',
      text: 'this is a todo',
    };

    const result = addTodo(todo);

    expect(result.todo).toEqual(todo);
  });
});

describe('deleteTodo', () => {
  test('uses DELETE_TODO type', () => {
    const result = deleteTodo();

    expect(result.type).toBe(DELETE_TODO);
  });

  test('returns id passed in', () => {
    const id = '1234';

    const result = deleteTodo(id);

    expect(result.id).toBe(id);
  });
});

describe('editTodo', () => {
  test('uses EDIT_TODO type', () => {
    const result = editTodo();

    expect(result.type).toBe(EDIT_TODO);
  });

  test('returns id passed in', () => {
    const id = '123';

    const result = editTodo(id);

    expect(result.id).toBe(id);
  });
});

describe('saveEdit', () => {
  test('saveEdit uses SAVE_EDIT type', () => {
    const result = saveEdit();

    expect(result.type).toBe(SAVE_EDIT);
  });

  test('saveEdit returns todo passed in', () => {
    const id = '1234';
    const text = 'the new text for the todo';
    const saveTodo = {
      id,
      text,
    };

    const result = saveEdit(saveTodo);

    expect(result.todo).toBe(saveTodo);
  });
});
