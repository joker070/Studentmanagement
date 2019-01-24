import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store';

import Router from './routes.js';
import Login from './Login';

export default class App extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <Router component={Login} />
      </Provider>
    );
  }
}
