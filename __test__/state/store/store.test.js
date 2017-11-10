/* eslint-disable no-unused-expressions */
import {
  defaultState,
  deleteStore,
  getStore,
} from '../../../src/state/store/store';

describe('defaultState', () => {
  it('has todos array', () => {
    const { todos } = defaultState;

    expect(todos).toBeInstanceOf(Array);
    expect(todos).toHaveLength(0);
  });

  it('has lists map', () => {
    const { lists } = defaultState;

    expect(lists).toBeInstanceOf(Map);
    expect(lists.size).toEqual(0);
  });

  it('has showCompleted bool', () => {
    const { showCompleted } = defaultState;

    expect(showCompleted).toEqual(true);
  });
});

describe('deleteStore', () => {
  it('forces re-creation of store', () => {
    const initialStore = getStore();
    deleteStore();
    const secondRequestedStore = getStore();

    expect(secondRequestedStore).not.toBe(initialStore);
  });
});

describe('getStore', () => {
  afterEach(deleteStore);

  it('only creates store once', () => {
    const initialStore = getStore();
    const secondRequestedStore = getStore();

    expect(secondRequestedStore).toBe(initialStore);
  });

  describe('initial state', () => {
    it('uses passed in state', () => {
      const initialState = {};
      const store = getStore(initialState);
      const state = store.getState();

      expect(state).toBe(initialState);
    });

    it('uses defaultState when state is not supplied', () => {
      const store = getStore();
      const state = store.getState();

      expect(state).toBe(defaultState);
    });
  });
});
