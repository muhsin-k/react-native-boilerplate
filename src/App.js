import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import RootContainer from './RootContainer';
import rootReducer from './reducer/index';

const store = createStore(rootReducer, applyMiddleware(thunk));
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    );
  }
}
