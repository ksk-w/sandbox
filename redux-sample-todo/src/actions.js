export const ADD_TODO = 'ADD_TODO';
export const COMPLATE_TODO = 'COMPLATE_TODO';
export const SET_VISIVILITY_FILTER = 'SET_VISIVILITY_FILTER';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export function addTodo(text) {
  return { type: ADD_TODO, text };
}

export function completeTodo(index) {
  return { type: COMPLATE_TODO, index };
}

export function setVisivilityFilter(filter) {
  return { type: SET_VISIVILITY_FILTER, filter }
}
