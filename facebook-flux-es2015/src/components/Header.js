import React, {Component} from 'react';
import {create} from '../actions/todo-action';
import TodoTextInput from './TodoTextInput';

export default class Header extends Component {
  render() {
    return (
      <header id="header">
        <h1>todos</h1>
        <TodoTextInput
          id="new-todo"
          placeholder="what needs to be done"
          onSave={this._onSave}
        />
      </header>
    );
  }
  _onSave(text) {
    if(text.trim()) {
      create(text);
    }
  }
}
