import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  INCOMPLETE_TODO,
  SAVE_EDIT,
  TOGGLE_COMPLETED,
} from '../../../src/state/actions/actionTypes';

import {
  addTodo,
  completeTodo,
  deleteTodo,
  incompleteTodo,
  saveEdit,
  toggleCompleted,
} from '../../../src/state/actions/actionCreators';

describe('addTodo', () => {
  it('uses ADD_TODO type', () => {
    const result = addTodo();

    expect(result.type).toBe(ADD_TODO);
  });

  it('returns todo object passed in', () => {
    const todo = {
      id: '123',
      text: 'this is a todo',
    };

    const result = addTodo(todo);

    expect(result.todo).toEqual(todo);
  });
});

describe('completeTodo', () => {
  it('uses COMPLETE_TODO type', () => {
    const result = completeTodo();

    expect(result.type).toBe(COMPLETE_TODO);
  });

  it('returns id passed in', () => {
    const id = '1234';

    const result = completeTodo(id);

    expect(result.id).toBe(id);
  });
});

describe('deleteTodo', () => {
  it('uses DELETE_TODO type', () => {
    const result = deleteTodo();

    expect(result.type).toBe(DELETE_TODO);
  });

  it('returns id passed in', () => {
    const id = '1234';

    const result = deleteTodo(id);

    expect(result.id).toBe(id);
  });
});

describe('incompleteTodo', () => {
  it('uses INCOMPLETE_TODO type', () => {
    const result = incompleteTodo();

    expect(result.type).toBe(INCOMPLETE_TODO);
  });

  it('returns id passed in', () => {
    const id = '1234';

    const result = incompleteTodo(id);

    expect(result.id).toBe(id);
  });
});

describe('saveEdit', () => {
  it('uses SAVE_EDIT type', () => {
    const result = saveEdit();

    expect(result.type).toBe(SAVE_EDIT);
  });

  it('returns todo passed in', () => {
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

describe('toggleCompleted', () => {
  it('uses TOGGLE_COMPLETED type', () => {
    const result = toggleCompleted();

    expect(result.type).toBe(TOGGLE_COMPLETED);
  });

  describe('show value', () => {
    it('is true when true is passed in', () => {
      const toggleCompletedValue = true;

      const result = toggleCompleted(toggleCompletedValue);

      expect(result.showCompleted).toBe(toggleCompletedValue);
    });

    it('is false when false is passed in', () => {
      const toggleCompletedValue = false;

      const result = toggleCompleted(toggleCompletedValue);

      expect(result.showCompleted).toBe(toggleCompletedValue);
    });
  });
});
