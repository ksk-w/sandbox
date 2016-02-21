import React, { Component, PropTypes } from 'react';
import {toggleComplete, updateText, destroy} from '../actions/todo-action'
import TodoTextInput from './TodoTextInput';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
  }

  render() {
    const {todo} = this.props;
    const {id, complete, text} = todo;

    let input;
    if (this.state.isEditing) {
      input =
        <TodoTextInput
          className="edit"
          onSave={this._onSave.bind(this)}
          value={text}
        />;
    }

    return (
      <li key={id} className={complete ? 'complete' : this.state.isEditing ? 'editing' : ''}>
        <div className="view">
          <input
            type="checkbox"
            className="toggle"
            checked={complete}
            onChange={this._onToggleComplte.bind(this)}
          />
        <label onDoubleClick={this._onDoubleClick.bind(this)}>
          {text}
        </label>
        <button className="destroy" onClick={this._onDestroyClick.bind(this)}>x</button>
        </div>
        {input}
      </li>
    );
  }

  _onToggleComplte() {
    toggleComplete(this.props.todo);
  }

  _onDoubleClick() {
    this.setState({isEditing: true})
  }

  _onSave(text) {
    updateText(this.props.todo.id, text);
    this.setState({isEditing: false});
  }

  _onDestroyClick() {
    destroy(this.props.todo.id);
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem;
