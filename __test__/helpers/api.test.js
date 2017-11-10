import {
  getNameForList,
} from '../../src/helpers/api';

describe('api', () => {
  describe('getNameForList', () => {
    it('returns "List" when id does not exist in state', () => {
      const result = getNameForList();

      expect(result).toBe('List');
    });
  });
});
