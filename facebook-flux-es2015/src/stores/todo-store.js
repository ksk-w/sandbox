import todoDispatcher from '../dispatchers/todo-dispatcher';
import { EventEmitter } from 'events';
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

const CHANGE_EVENT = 'change';
let _todos = {};

function create(text) {
  let id = (Date.now() + Math.floor(Math.random() * 999999)).toString(36);
  _todos[id] = {
    id,
    text,
    complete: false
  };
}

function update(id, updates) {
  _todos[id] = Object.assign({}, _todos[id], updates);
}

function updateAll(updates) {
  for(var id in _todos) {
    update(id, updates);
  }
}

function destroy(id) {
  delete _todos[id];
}

function destroyCompleted() {
  for (var id in _todos) {
    if (_todos[id].complete) {
      destroy(id);
    }
  }
}

class TodoStore extends EventEmitter {

  areAllComplete() {
    for (var id in _todos) {
      if (!_todos.complete) {
        return false;
      }
    }
    return true;
  }

  getAll() {
    return _todos;
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener((CHANGE_EVENT, callback));
  }
}

const store = new TodoStore();

todoDispatcher.register(function(action) {
  var text = '';

  switch(action.actionType) {
    case TODO_CREATE:
      text = action.text.trim();
      if (text) {
        create(text);
        store.emitChange();
      }
      break;

    case TODO_TOGGLE_CONPLETE_ALL:
      if(store.areAllComplete()) {
        updateAll({complete: false});
      } else {
        updateAll({complete: true});
      }
      store.emitChange();
      break;

    case TODO_UNDO_COMPLETE:
      update(action.id, {complete: false});
      store.emitChange();
      break;

    case TODO_COMPLETE:
      update(action.id, {complete: true});
      store.emitChange();
      break;

    case TODO_UPDATE_TEXT:
      text = action.text.trim();
      if (text) {
        update(action.id, {text});
        store.emitChange();
      }
      break;

    case TODO_DESTROY:
      destroy(action.id);
      store.emitChange();
      break;

    case TODO_DESTROY_COMPLETED:
      destroyCompleted()
      store.emitChange();
      break;

    default:
  }
});

export default store;
