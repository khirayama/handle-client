export const keyCodes = {
  TAB: 9,
  ENTER: 13,
  ESC: 27,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  K: 75,
};

export const pages = {
  TASK_CATEGORIES: 'TASK_CATEGORIES_PAGE',
  SETTINGS: 'SETTINGS_PAGE',
  HELP: 'HELP_PAGE',
};

export const EVENT_CHANGE = 'CHANGE_STORE';

export const actionTypes = {
  // FOR_APP
  BACK_PAGE: 'BACK_PAGE',
  CHANGE_PAGE: 'CHANGE_PAGE',
  // FOR_TASK
  CREATE_TASK: 'CREATE_TASK',
  UPDATE_TASK: 'UPDATE_TASK',
  DELETE_TASK: 'DELETE_TASK',
  SORT_TASKS: 'SORT_TASKS',
  MOVE_TASK: 'MOVE_TASK',
  // FOR_TASK_CATEGORY
  GET_ALL_TASK_CATEGORIES: 'GET_ALL_TASK_CATEGORIES',
  CREATE_TASK_CATEGORY: 'CREATE_TASK_CATEGORY',
  UPDATE_TASK_CATEGORY: 'UPDATE_TASK_CATEGORY',
  EDIT_TASK_CATEGORY: 'EDIT_TASK_CATEGORY',
  DELETE_TASK_CATEGORY: 'DELETE_TASK_CATEGORY',
  SORT_TASK_CATEGORIES: 'SORT_TASK_CATEGORIES',
};

export const initialTaskCategoryNames = {
  TODAY: 'TODAY',
  LATER: 'LATER',
  SCHEDULE: 'SCHEDULE',
};

export const messages = {
  CONFIRM_DELETE_TASK_CATEGORY: 'This category has tasks. Delete this category?',
};
