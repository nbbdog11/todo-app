import todoAppReducer from '../../../src/state/reducers/reducers';
import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  SAVE_EDIT,
} from '../../../src/state/actions/actionTypes';

describe('todoAppReducer', () => {
  it('returns original state when action is unknown', () => {
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

  it('adds todo when action is add', () => {
    const firstTodo = {
      id: '123',
      text: 'todo text',
      completed: true,
    };
    const originalState = {
      todos: [firstTodo],
    };
    const newTodo = {
      id: '456',
      text: 'new todo',
      completed: false,
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

  describe('completion actions', () => {
    it('sets completed to true when action is complete', () => {
      const idForComplete = '456';
      const firstTodo = {
        id: '123',
        text: 'todo text',
        completed: false,
      };
      const todoForComplete = {
        id: idForComplete,
        text: 'complete todo',
        completed: false,
      };
      const completedTodo = Object.assign({}, todoForComplete, { completed: true });
      const originalState = {
        todos: [firstTodo, todoForComplete],
      };
      const completeAction = {
        type: COMPLETE_TODO,
        id: idForComplete,
      };

      const result = todoAppReducer(originalState, completeAction);
      const resultTodos = result.todos;

      expect(resultTodos).toHaveLength(2);
      expect(resultTodos).toContain(firstTodo);
      expect(resultTodos).toContainEqual(completedTodo);
    });

    it('sets completed to false when action is incomplete', () => {
      const idForIncomplete = '456';
      const firstTodo = {
        id: '123',
        text: 'todo text',
        completed: false,
      };
      const todoForIncomplete = {
        id: idForIncomplete,
        text: 'incomplete todo',
        completed: true,
      };
      const incompletedTodo = Object.assign({}, todoForIncomplete, { completed: false });
      const originalState = {
        todos: [firstTodo, todoForIncomplete],
      };
      const incompleteAction = {
        type: 'INCOMPLETE_TODO',
        id: idForIncomplete,
      };

      const result = todoAppReducer(originalState, incompleteAction);
      const resultTodos = result.todos;

      expect(resultTodos).toHaveLength(2);
      expect(resultTodos).toContain(firstTodo);
      expect(resultTodos).toContainEqual(incompletedTodo);
    });
  });

  it('deletes todo when action is delete', () => {
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

  it('saves edit when action is save edit', () => {
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
});
