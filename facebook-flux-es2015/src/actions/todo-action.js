import todoDispatcher from '../dispatchers/todo-dispatcher';
import todoConstant from '../constatnts/todo-constant';
const {
  TODO_CREATE,
  TODO_COMPLETE,
  TODO_DESTROY,
  TODO_DESTROY_COMPLETED,
  TODO_TOGGLE_CONPLETE_ALL,
  TODO_UNDO_COMPLETE,
  TODO_UPDATE_TEXT
} = todoConstant;

export function create (text) {
  todoDispatcher.dispatch({
    actionType: TODO_CREATE,
    text
  });
}

export function updateText(id, text) {
  todoDispatcher.dispatch({
    actionType: TODO_UPDATE_TEXT,
    id,
    text
  });
}

export function toggleComplete(todo) {
  const {id, complete} = todo;

  todoDispatcher.dispatch({
    actionType: complete ? TODO_UNDO_COMPLETE : TODO_COMPLETE,
    id
  });
}

export function toggleCompleteAll() {
  todoDispatcher.dispatch({
    actionType: TODO_TOGGLE_CONPLETE_ALL
  });
}

export function destroy(id) {
  todoDispatcher.dispatch({
    actionType: TODO_DESTROY,
    id
  });
}

export function destroyCompleted() {
  todoDispatcher.dispatch({
    actionType: TODO_DESTROY_COMPLETED
  });
}
