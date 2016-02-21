import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import MainSection from './MainSection'
import TodoStore from '../stores/todo-store';

function getTodoState() {
  return  {
    allTodos: TodoStore.getAll(),
    areAllComplete: TodoStore.areAllComplete()
  };
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = getTodoState();
  }

  componentDidMount() {
    TodoStore.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnmount() {
    TodoStore.removeChangeListener(this._onChange.bind(this));
  }

  render () {
    const {allTodos, areAllComplete} = this.state
    return (
      <div>
        <Header />
        <MainSection allTodos={allTodos} areAllComplete={areAllComplete} />
        <Footer allTodos={allTodos} />
      </div>
    );
  }

  _onChange() {
    this.setState(getTodoState());
  }
}
