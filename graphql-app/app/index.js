import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { queryReducer } from './reducers/reducer';
import Query from './components/Query';

const store = createStore(
  queryReducer,
  applyMiddleware(thunk)
);

class Main extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      store: store.getState(),
    };
  }
  
  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        store: store.getState()
      })
    })
  }
  render() {
    return (
      <Query store={this.state.store} dispatch={store.dispatch}/>
    );
  }
}
render(
  <Main />,
  document.getElementById('app')
);
