import React, {Component, PropTypes} from 'react';
import {destroyCompleted} from '../actions/todo-action';

export default class Footer extends Component {
  render() {
    const {allTodos} = this.props;
    const total = Object.keys(allTodos).length;

    if (total === 0) {
      return null;
    }

    let completed = 0;
    for (var key in allTodos) {
      if (allTodos[key].complete) {
        completed++;
      }
    }

    const itemLeft = total - completed
    let itemLeftPhrase = itemLeft === 1 ? ' item ' : ' items ';
    itemLeftPhrase += 'left';

    const clearCompleteButton = (
      <button
        id="clearcomplete"
        onClick={this._onClearCompletedClick}>
        Clear completed ({completed})
      </button>
    );

    return (
      <footer id="footer">
        <span id="todo-count">
          <strong>{itemLeft}</strong>
          {itemLeftPhrase}
        </span>
        {completed ? clearCompleteButton : ''}
      </footer>
    );
  }

  _onClearCompletedClick() {
    destroyCompleted();
  }
}

Footer.propTypes =  {
  allTodos: PropTypes.object.isRequired
};
