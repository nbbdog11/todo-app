import {
  deleteStore,
  getStore,
} from '../../src/state/store/store';
import {
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
});
