import todoAppReducer from '../../../src/state/reducers/reducers';
import {
  ADD_TODO,
  DELETE_TODO,
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
    const originalState = {
      todos: [firstTodo, todoForEdit],
      activeEdits: [],
    };
    const saveEditAction = {
      type: SAVE_EDIT,
      id: idForEdit,
      text: expectedTodoText,
    };

    const result = todoAppReducer(originalState, saveEditAction);
    const updatedTodosResult = result.todos.filter(item => item.id === idForEdit);

    expect(updatedTodosResult).toHaveLength(1);
    expect(updatedTodosResult[0]).toHaveProperty('text', expectedTodoText);
  });

  test('removes saved edit from active edits', () => {
    const idForEdit = '456';
    const firstTodo = {
      id: '123',
      text: 'todo text',
    };
    const todoForEdit = {
      id: idForEdit,
      text: 'should be updated',
    };
    const activeEditForRemoval = {
      id: idForEdit,
    };
    const activeEditThatShouldRemain = {
      id: '123',
    };
    const originalState = {
      todos: [firstTodo, todoForEdit],
      activeEdits: [activeEditForRemoval, activeEditThatShouldRemain],
    };
    const saveEditAction = {
      type: SAVE_EDIT,
      id: idForEdit,
      text: 'updated text',
    };

    const result = todoAppReducer(originalState, saveEditAction);
    const activeEditsResult = result.activeEdits;

    expect(activeEditsResult).toHaveLength(1);
    expect(activeEditsResult).toContain(activeEditThatShouldRemain);
    expect(activeEditsResult).not.toContain(activeEditForRemoval);
  });
});
