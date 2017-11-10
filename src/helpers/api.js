import { getStore } from '../state/store/store';

const getTodosForList = (listId) => {
  const store = getStore();
  const state = store.getState();
  const todos = state.todos.filter(todo => todo.listId === listId);
  return todos;
};

const getCompletionStatsForList = (listId) => {
  const todos = getTodosForList(listId);
  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;
  const completedPercentageFull = totalCount === 0 ? 0 : (completedCount / totalCount) * 100;
  const completedPercentage = completedPercentageFull.toFixed(2);
  return {
    completedCount,
    completedPercentage,
    totalCount,
  };
};

const getNameForList = (listId) => {
  const store = getStore();
  const state = store.getState();
  const list = state.lists.get(listId);
  if (list) {
    return list.name;
  }
  return 'List';
};

export {
  getCompletionStatsForList,
  getNameForList,
};
