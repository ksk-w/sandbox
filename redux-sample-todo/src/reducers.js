import { combineReducers } from 'redux';
import { ADD_TODO, COMPLATE_TODO, SET_VISIVILITY_FILTER, VisibilityFilters } from './actions';

const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIVILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case COMPLATE_TODO:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: !state[action.index].completed
        }),
        ... state.slice(action.index + 1)
      ];
    default:
      return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;
