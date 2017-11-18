import {
  deleteStore,
  getStore,
} from '../../src/state/store/store';
import {
  getCompletionStatsForList,
  getNameForList,
} from '../../src/helpers/api';

const preSetStateInStore = state => getStore(state);

describe('api', () => {
  afterEach(deleteStore);
  describe('getNameForList', () => {
    describe('returns "List"', () => {
      it('when id is not passed in', () => {
        const result = getNameForList();

        expect(result).toBe('List');
      });

      it('when id does not exist in state', () => {
        const nonExistentId = 'some-id';

        const result = getNameForList(nonExistentId);

        expect(result).toBe('List');
      });
    });

    it('returns name of list when id is in state', () => {
      const id = 'id';
      const list = {
        name: 'name',
      };
      const lists = new Map([[id, list]]);
      const state = {
        lists,
      };
      preSetStateInStore(state);

      const result = getNameForList(id);

      expect(result).toBe(list.name);
    });
  });

  describe('getCompletionStatsForList', () => {
    describe('completedCount', () => {
      it('is 0 when there are no todos', () => {
        const result = getCompletionStatsForList('some-list');

        expect(result.completedCount).toBe(0);
      });

      it('is 0 when no todos in list are completed', () => {
        const listId = 'id';
        const incompleteTodo = {
          listId,
          completed: false,
        };
        const todos = [incompleteTodo];
        const state = {
          todos,
        };
        preSetStateInStore(state);

        const result = getCompletionStatsForList(listId);

        expect(result.completedCount).toBe(0);
      });

      it('equals number of completed todos in list when any are completed', () => {
        const listId = 'id';
        const incompleteTodo = {
          listId,
          completed: false,
        };
        const completeTodo = {
          listId,
          completed: true,
        };
        const completeTodoForOtherList = {
          listId: 'some-other-list',
          completed: true,
        };
        const todos = [incompleteTodo, completeTodo, completeTodoForOtherList];
        const state = {
          todos,
        };
        preSetStateInStore(state);

        const result = getCompletionStatsForList(listId);

        expect(result.completedCount).toBe(1);
      });
    });

    describe('completedPercentage', () => {
      it('is 0 when there are no todos in list', () => {
        const result = getCompletionStatsForList('some-list');

        expect(result.completedPercentage).toBe('0');
      });

      it('is 0 when there are no completed todos in list', () => {
        const listId = 'list-id';
        const incompleteTodo = {
          listId,
          completed: false,
        };
        const completeTodoForOtherList = {
          listId: 'some-other-list-id',
          completed: true,
        };
        const todos = [incompleteTodo, completeTodoForOtherList];
        const state = {
          todos,
        };
        preSetStateInStore(state);

        const result = getCompletionStatsForList(listId);

        expect(result.completedPercentage).toBe('0');
      });

      it('is 100 when there are only completed todos in list', () => {
        const listId = 'list-id';
        const completeTodo = {
          listId,
          completed: true,
        };
        const todos = [completeTodo];
        const state = {
          todos,
        };
        preSetStateInStore(state);

        const result = getCompletionStatsForList(listId);

        expect(result.completedPercentage).toBe('100');
      });

      it('uses 2 decimal places when the percentage is not a whole number', () => {
        const listId = 'list-id';
        const completeTodo = {
          listId,
          completed: true,
        };
        const incompleteTodo = {
          listId,
          completed: false,
        };
        const todos = [completeTodo, incompleteTodo, incompleteTodo];
        const state = {
          todos,
        };
        preSetStateInStore(state);

        const result = getCompletionStatsForList(listId);

        expect(result.completedPercentage).toBe('33.33');
      });
    });

    describe('totalCount', () => {
      it('is 0 when there are no todos', () => {
        const result = getCompletionStatsForList('some-list');

        expect(result.totalCount).toBe(0);
      });

      it('equals the number of todos in the given list', () => {
        const listId = 'list-id';
        const todo = {
          listId,
        };
        const todos = [todo, todo];
        const state = {
          todos,
        };
        preSetStateInStore(state);

        const result = getCompletionStatsForList(listId);

        expect(result.totalCount).toBe(2);
      });
    });
  });
});
