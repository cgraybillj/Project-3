import { FILTERS } from "../constants";

export const getTasksState = store => store.tasks;

export const getTaskList = store =>
  getTasksState(store) ? getTasksState(store).allIds : [];

export const getTaskById = (store, id) =>
  getTasksState(store) ? { ...getTasksState(store).byIds[id], id } : {};

  export const getTasks = store =>
  getTaskList(store).map(id => getTaskById(store, id));

export const getTasksByFilter = (store, Filter) => {
  const allTasks = getTasks(store);
  switch (Filter) {
    case FILTERS.COMPLETED:
      return allTasks.filter(task => task.completed);
    case FILTERS.INCOMPLETE:
      return allTasks.filter(task => !task.completed);
    case FILTERS.ALL:
    default:
      return allTasks;
  }
};