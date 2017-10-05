import todoAppReducer from '../../../src/state/reducers/reducers';
import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  SAVE_EDIT,
} from '../../../src/state/actions/actionTypes';

describe('todoAppReducer', () => {
  test('returns original state when action is unknown', () => {
    const originalState = {
      todos: ['123', '456'],
      activeEdits: ['123'],
    };
    const unknownAction = {
      type: 'UNKNOWN_ACTION',
    };

    const result = todoAppReducer(originalState, unknownAction);

    expect(result).toBe(originalState);
  });

  test('adds todo when action is add', () => {
    const firstTodo = {
      id: '123',
      text: 'todo text',
    };
    const originalState = {
      todos: [firstTodo],
    };
    const newTodo = {
      id: '456',
      text: 'new todo',
    };
    const addAction = {
      type: ADD_TODO,
      todo: newTodo,
    };

    const result = todoAppReducer(originalState, addAction);
    const resultTodos = result.todos;

    expect(resultTodos).toHaveLength(2);
    expect(resultTodos).toContain(firstTodo);
    expect(resultTodos).toContain(newTodo);
  });

  test('deletes todo when action is delete', () => {
    const idForDelete = '456';
    const firstTodo = {
      id: '123',
      text: 'todo text',
    };
    const todoForDelete = {
      id: idForDelete,
      text: 'new todo',
    };
    const originalState = {
      todos: [firstTodo, todoForDelete],
    };
    const deleteAction = {
      type: DELETE_TODO,
      id: idForDelete,
    };

    const result = todoAppReducer(originalState, deleteAction);
    const resultTodos = result.todos;

    expect(resultTodos).toHaveLength(1);
    expect(resultTodos).toContain(firstTodo);
    expect(resultTodos).not.toContain(todoForDelete);
  });

  test('adds to active edits when editing todo', () => {
    const activeEditId = '123';
    const newEditId = '456';
    const originalState = {
      activeEdits: [activeEditId],
    };
    const editAction = {
      type: EDIT_TODO,
      id: newEditId,
    };

    const result = todoAppReducer(originalState, editAction);

    expect(result.activeEdits).toHaveLength(2);
    expect(result.activeEdits).toContain(activeEditId);
    expect(result.activeEdits).toContain(newEditId);
  });

  test('does not add editing todo when already editing', () => {
    const activeEditId = '123';
    const originalState = {
      activeEdits: [activeEditId],
    };
    const editAction = {
      type: EDIT_TODO,
      id: activeEditId,
    };

    const result = todoAppReducer(originalState, editAction);

    expect(result.activeEdits).toHaveLength(1);
    expect(result.activeEdits).toContain(activeEditId);
  });

  test('saves edit when action is save edit', () => {
    const idForEdit = '456';
    const expectedTodoText = 'updated text for todo';
    const firstTodo = {
      id: '123',
      text: 'todo text',
    };
    const todoForEdit = {
      id: idForEdit,
      text: 'should be updated',
    };
    const updatedTodo = {
      id: idForEdit,
      text: expectedTodoText,
    };
    const originalState = {
      todos: [firstTodo, todoForEdit],
      activeEdits: [],
    };
    const saveEditAction = {
      type: SAVE_EDIT,
      todo: updatedTodo,
    };

    const result = todoAppReducer(originalState, saveEditAction);

    expect(result.todos).toHaveLength(2);
    expect(result.todos).toContain(firstTodo);
    expect(result.todos).toContainEqual(updatedTodo);
  });

  test('removes saved edit from active edits', () => {
    const idForEdit = '456';
    const idThatShouldRemain = '123';
    const firstTodo = {
      id: idThatShouldRemain,
    };
    const todoForEdit = {
      id: idForEdit,
    };
    const originalState = {
      todos: [firstTodo, todoForEdit],
      activeEdits: [idForEdit, idThatShouldRemain],
    };
    const saveEditAction = {
      type: SAVE_EDIT,
      todo: {
        id: idForEdit,
      },
    };

    const result = todoAppReducer(originalState, saveEditAction);
    const activeEditsResult = result.activeEdits;

    expect(activeEditsResult).toHaveLength(1);
    expect(activeEditsResult).toContain(idThatShouldRemain);
    expect(activeEditsResult).not.toContain(idForEdit);
  });
});
