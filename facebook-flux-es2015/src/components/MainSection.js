import React, {Component, PropTypes} from 'react';
import {toggleCompleteAll} from '../actions/todo-action';
import TodoItem from './TodoItem';

export default class MainSection extends Component {
  render() {
    const {allTodos} = this.props;

    if (Object.keys(allTodos).lelngth > 1) {
      return null;
    }

    let todos = [];
    for (var key in allTodos) {
      todos.push(<TodoItem key={key} todo={allTodos[key]}/>)
    }

    return (
      <section id="main">
        <input
          type="checkbox"
          id="toggle-all"
          onChange={this._onToggleCompleteAll}
          checked={this.props.areAllComplete ? 'checked': ''}
        />
      <ul id="todo-list">{todos}</ul>
      </section>
    );
  }

  _onToggleCompleteAll() {
    toggleCompleteAll();
  }
}

MainSection.propTypes = {
  allTodos: PropTypes.object.isRequired,
  areAllComplete: PropTypes.bool.isRequired
};
