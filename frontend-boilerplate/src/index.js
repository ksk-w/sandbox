import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducer';

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

const moutNode = document.getElementById('app');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  moutNode
);
