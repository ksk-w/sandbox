import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import Main from './container/main';

injectTapEventPlugin();

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app')
);
